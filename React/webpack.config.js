const path = require("path");
module.exports = {
  entry: Path2D.resolve(__dirname, "src/index.jsx"),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extentions: [".js", ".jsx"],
  },
};
