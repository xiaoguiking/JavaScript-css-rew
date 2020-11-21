const HtmlWebpackPlugin = require('html-webpack-plugin'),
	  path = require('path');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: "development",        // 开发环境 dev    生产环境  prod
	entry: {   // 入口文件
		app: path.resolve(__dirname, './src/js/app.js'),
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
				use: {
                    // 打包编译ES6语法
                    loader: "babel-loader",
                    options: {
                        presets: [
                            // 用于将高级语法转换为低级语法
                            "babel-preset-env"
                        ]
                    }
                },
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
		new uglify(),
		new HtmlWebpackPlugin({
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html'),
			chunks: ['app'],
			excludeChunks: ['node-modules'],
			hash: true
		})
	],
	devServer: {
		open: true,
		host: 'localhost',
		port: '8700'
	}
}