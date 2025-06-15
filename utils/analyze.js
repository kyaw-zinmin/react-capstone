const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const SRC_DIR = path.resolve("../src");
const OUT_DIR = path.resolve("../analyze");

const sideEffectKeywords = ["console", "fetch", "setTimeout", "setInterval", "document", "window"];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function analyzeFile(code, filePath) {
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  const result = {
    file: path.relative(process.cwd(), filePath),
    exports: [],
    complexity: {},
  };

  const exportedFns = new Set();

  traverse(ast, {
    ExportNamedDeclaration(path) {
      const decl = path.node.declaration;
      if (decl?.type === "FunctionDeclaration" && decl.id) {
        const fnName = decl.id.name;
        exportedFns.add(fnName);
        result.exports.push(fnName);
        result.complexity[fnName] = {
          conditionals: 0,
          loops: 0,
          sideEffects: [],
        };

        path.traverse({
          IfStatement() {
            result.complexity[fnName].conditionals++;
          },
          SwitchStatement() {
            result.complexity[fnName].conditionals++;
          },
          ForStatement() {
            result.complexity[fnName].loops++;
          },
          WhileStatement() {
            result.complexity[fnName].loops++;
          },
          CallExpression(innerPath) {
            const callee = innerPath.node.callee;
            const name = callee?.object?.name || callee?.name;
            if (sideEffectKeywords.includes(name)) {
              result.complexity[fnName].sideEffects.push(name);
            }
          },
        });
      }
    },

    ExportDefaultDeclaration(path) {
      const decl = path.node.declaration;
      let fnName = "default";

      if (decl.type === "FunctionDeclaration") {
        fnName = decl.id?.name || "default";
      }

      result.exports.push("default");

      result.complexity[fnName] = {
        conditionals: 0,
        loops: 0,
        sideEffects: [],
      };

      path.traverse({
        IfStatement() {
          result.complexity[fnName].conditionals++;
        },
        SwitchStatement() {
          result.complexity[fnName].conditionals++;
        },
        ForStatement() {
          result.complexity[fnName].loops++;
        },
        WhileStatement() {
          result.complexity[fnName].loops++;
        },
        CallExpression(innerPath) {
          const callee = innerPath.node.callee;
          const name = callee?.object?.name || callee?.name;
          if (sideEffectKeywords.includes(name)) {
            result.complexity[fnName].sideEffects.push(name);
          }
        },
      });
    },
  });

  return result;
}

const summaryReport = {
  totalFiles: 0,
  totalExports: 0,
  totalConditionals: 0,
  totalLoops: 0,
  sideEffectHits: {},
  files: [],
};

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith(".js") && !file.endsWith(".test.js")) {
      const relPath = path.relative(SRC_DIR, fullPath);
      const outPath = path.join(OUT_DIR, relPath).replace(/\.js$/, ".json");

      const code = fs.readFileSync(fullPath, "utf-8");
      const analysis = analyzeFile(code, fullPath);

      ensureDir(outPath);
      fs.writeFileSync(outPath, JSON.stringify(analysis, null, 2), "utf-8");
      console.log(`🧠 Analyzed: ${relPath}`);

      // Update summary
      summaryReport.totalFiles++;
      summaryReport.totalExports += analysis.exports.length;
      for (const fn of Object.values(analysis.complexity)) {
        summaryReport.totalConditionals += fn.conditionals;
        summaryReport.totalLoops += fn.loops;
        fn.sideEffects.forEach((se) => {
          summaryReport.sideEffectHits[se] = (summaryReport.sideEffectHits[se] || 0) + 1;
        });
      }
      summaryReport.files.push(analysis.file);
    }
  });
}

walk(SRC_DIR);

// Write global summary
fs.writeFileSync(
  path.join(OUT_DIR, "summary.json"),
  JSON.stringify(summaryReport, null, 2),
  "utf-8"
);
console.log("📄 Created: analyze/summary.json");