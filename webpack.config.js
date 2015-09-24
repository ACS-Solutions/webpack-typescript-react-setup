var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/entry.tsx",
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js"
  },
	// resolve: {
  // 	root: [
  //   	path.join(__dirname, "src"),
  //   ]
  // },
  // Currently we need to add '.ts' to resolve.extensions array.
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.css', '.ts', '.tsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      }
    ]
  }
};
