var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/router.tsx",
  output: {
    path: path.join(__dirname, "dist/js"),
    publicPath: 'js/',
    filename: "bundle.js"
  },
	// resolve: {
  // 	root: [
  //   	path.join(__dirname, "src"),
	// 		path.join(__dirname, 'node_modules')
  //   ]
  // },
  // Currently we need to add '.ts' to resolve.extensions array.
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.css', '.ts', '.tsx']
  },
  devtool: 'source-map',
  postcss: [
    require('postcss-nested'),
    require('cssnext')({
      browsers: [
        "last 2 versions",
        "ie >= 9"
      ]
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader'
      },
      { // Load module based CSS
        test: /^(?!global).*\.css$/,
        loader: "style-loader!css-loader?modules&!postcss-loader"
      },
      { // Loader for global css files (filename starts with "global.")
        test: /^(global).*\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  }
};
