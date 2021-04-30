export default {
	bail: false,
	clearMocks: true,
	coverageDirectory: "coverage",
	preset: 'ts-jest',
	rootDir: "./",
	roots: [
		"<rootDir>/src/tests"
	],
	testEnvironment: "jsdom",
	testPathIgnorePatterns: [
		"\\\\node_modules\\\\"
	],
}
