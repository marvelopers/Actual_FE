const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"), //이 파일의 내용을 -> main.js로 만들겠다. path.resolve()의 경우는 파일의 경로를 만들어 준다. __dirname은 현재 파일의 경로를 알려준다.
  module: {
    rules: [
      {
        test: /\.jsx?$/, //파일 명이 js 또는 jsx라는 이름을 가진 파일에 대하여 다음 rule을 적용하겠다 그 룰은 babel-loader이다
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], //웹펙을 적용할 파일확장자는 .js .jsx
  },
  devServer: {
    historyApiFallBack: {
      index: "index.html",
    },
  },
};
/*
npx webpack-dev-server 라고 실행하면
해당  webpack.config.js 파일이 있는 경로에 index.html에 config 파일에 설정한 내용을 가지고 main.js를 만들어 삽입 시켜서 동작하게 한다.

일단 위에서 babel-loader를 통해서 js와 jsx 파일을 하나로 합칠때 관련된 설정을 해주기 위해서
babel.config.js 를만들어서 설정한다.
*/
