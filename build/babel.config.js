export default {
	presets: [
		['@babel/preset-env', {
			shippedProposals: true,
			useBuiltIns: false,
			modules: false
		}]
	],
	plugins: [
		['@babel/plugin-proposal-private-methods'],
		['@babel/plugin-proposal-class-properties'],
		['@babel/plugin-transform-runtime', {
			regenerator: true
		}]
	]
}
