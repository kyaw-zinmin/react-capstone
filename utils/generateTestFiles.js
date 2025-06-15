// scripts/generateTests.js
const fs = require("fs");
const path = require("path");

const SRC_DIR = path.resolve("../src");
const TESTS_DIR = path.resolve("../tests");

const walk = (srcDir) => {
  fs.readdirSync(srcDir).forEach((file) => {
    const fullPath = path.join(srcDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (
      fullPath.endsWith(".js") &&
      !fullPath.endsWith(".test.js")
    ) {
      const relativePath = path.relative(SRC_DIR, fullPath);
      const testPath = path.join(TESTS_DIR, relativePath).replace(/\.js$/, ".test.js");
      const testDir = path.dirname(testPath);

      // Ensure the test directory exists
      fs.mkdirSync(testDir, { recursive: true });

      if (!fs.existsSync(testPath)) {
        fs.writeFileSync(
          testPath,
          `// Auto-generated test for ${relativePath}\n\n` +
            `describe('${path.basename(fullPath)}', () => {\n  it('should work', () => {\n    // TODO: Write tests\n  });\n});\n`
        );
        console.log(`✅ Created test: ${testPath}`);
      }
    }
  });
};

walk(SRC_DIR);