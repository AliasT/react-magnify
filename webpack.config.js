var path = require("path");
module.exports = {
  entry: {
    app: ["./example/main.js"]
  },
  output: {
    path: path.resolve(__dirname, './example'),
    filename: "bundle.js",
    publicPath: "example"
  },
  reslove: {
    extensions: ['.scss']
  },
  module: {
    loaders: [
      { test: /(\.js)|(\.jsx)$/, exclude: /node_modules/, loader: "babel"  },
      { test: /\.scss$/, loaders: ["style", "css", "sass"]}
    ]
  }
};
