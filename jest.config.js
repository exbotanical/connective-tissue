module.exports = {
	testRegex: '.test.ts$',
	coverageDirectory: './coverage',
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts'],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0
		}
	},
	errorOnDeprecated: true,
	verbose: true
};
