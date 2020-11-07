const HtmlWebpackPlugin = require('html-webpack-plugin'),
	  path = require('path');

module.exports = {
	mode: "development",        // 开发环境 dev    生产环境  prod
	entry: {   // 入口文件
		index: path.resolve(__dirname, './src/js/index.js'),
		// list： path.resolve(__dirname, './src/js/list.js')
	},
	output: { //打包输出文件夹
		path: path.resolve(__dirname + '/dist'),
		filename: 'js/[name].js'            // 名字
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node-modules'),
			},
			{
				test: /\.css/,
				use: [
				  'style-loader',
				  'css-loader',
				]
			},
			{
				test: /\.sass/,
				use: [
				  'style-loader',
				  'css-loader',
				  'sass-loader'
				]
			},
			{
				test: /\.tpl/,
				loader: 'ejs-loader',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html'),
			chunks: ['index'],
			excludeChunks: ['node-modules'],
		})
	],
	devServer: {
		open: true,
		host: 'localhost',
		port: '8700'
	}
}