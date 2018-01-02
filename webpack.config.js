const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path:  path.join(__dirname, 'src'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		},{
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: ['file-loader?context=src/assets/icons/[path][name].[ext]', {  // images loader
				loader: 'image-webpack-loader',
				query: {
					mozjpeg: {
						progressive: true,
					},
					gifsicle: {
						interlaced: false,
					},
					optipng: {
						optimizationLevel: 4,
					},
					pngquant: {
						quality: '75-90',
						speed: 3,
					},
				},
			}],
			exclude: /node_modules/,
			include: __dirname,
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		port: 9999,
		contentBase: path.join(__dirname, 'src')
	},
};