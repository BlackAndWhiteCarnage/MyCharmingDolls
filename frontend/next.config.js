const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	optimizeFonts: false,
	images: {
		domains: ['res.cloudinary.com'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src')],
	},
	webpack: require('./webpack.config'),
	eslint: {
		dirs: [__dirname],
	},
};

module.exports = nextConfig;
