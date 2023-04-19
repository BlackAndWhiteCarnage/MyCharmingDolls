const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'app')],
	},
	webpack: require('./webpack.config'),
	eslint: {
		dirs: [__dirname],
	},
};

module.exports = nextConfig;
