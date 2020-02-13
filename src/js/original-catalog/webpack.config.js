module.exports = {
  externals: {
    'react': 'React',
    'react-dom' : 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};