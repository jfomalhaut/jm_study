module.exports = {
	// 시작 파일 설정
	entry: [
		"@babel/polyfill",
		"./src/index.js"
	],
	// 사용할 파일 정리 및 loader 매칭
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico|jpeg)$/,
				use: [
					{ 
						loader: 'url-loader', 
						options: {
							limit: 1000,
							fallback: 'file-loader',
							name: 'assets/images/[name].[ext]'
						}
					}
				]
			},
			{
				// write files under 10k to inline or copy files over 10k
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
				  {
					 loader: 'url-loader',
					 options: {
						limit: 1000,
						fallback: 'file-loader',
						name: 'assets/fonts/[name].[ext]',
					 },
				  },
				],
		   }
		]
	},
	// 사용할 확장자
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	// 압축 이후, output 해줄 경로, 폴더 및 파일 이름 정의
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	// 사용할 개발 서버 및 기타 정의(port 넘버 등)
	// webpack은 개발용 서버를 제공함 (webpack-dev-server)
	devServer: {
		contentBase: "./dist",
		port: 3000,
		historyApiFallback: true
	}
}