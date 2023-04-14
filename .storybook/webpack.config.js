const webpackConfig = require('../webpack.config');

module.exports = ({ config }) => {
	config.module.rules = config.module.rules.map((rule) =>
		rule.issuer?.not?.toString() === /\.(css|scss|sass)$/.toString()
			? {
					...rule,
					exclude: /\.svg$/,
			  }
			: rule
	);

	return webpackConfig(config);
};
