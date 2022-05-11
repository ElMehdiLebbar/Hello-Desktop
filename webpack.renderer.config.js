const rules = require('./webpack.rules');

rules.push(
    {
      test: /\.css$/,
      use: [{ loader: 'css-loader' }],
    },
    {
      test: /\.html$/i,
      loader: "html-loader"
    }
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
