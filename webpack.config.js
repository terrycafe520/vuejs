var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {             
    loaders:[ 
        {
          test:/.vue$/,
          loaders:"vue-loader",
          exclude:["/node_modules/"]
        } 
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  watch : true
};