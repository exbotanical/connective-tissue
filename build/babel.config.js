export default {
	presets: [
		['@babel/preset-env', {
			shippedProposals: true,
			useBuiltIns: false,
			modules: false
		}]
	],
	plugins: [
		['@babel/plugin-proposal-class-properties', {
			loose: false
		}],
		['@babel/plugin-transform-runtime', {
			regenerator: true
		}]
	]
}
