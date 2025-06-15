module.exports ={
  devServer: (devServerConfig) => {
    devServerConfig.client = {
      ...devServerConfig.client,
      overlay: false,
    }
    return devServerConfig;
  }
}

module: {
  rules: [{
    test: /\.js$/,
    enforce: "pre",
    use: ['source-map-loader'],
    exclude: /node_modules/,
  }]
}