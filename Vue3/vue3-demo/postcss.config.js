module.exports = {
	plugins: [
		// 配置 Autoprefixer 插件
		require('autoprefixer')({
			'overrideBrowserslist': ['last 2 versions']
		})
	],
};