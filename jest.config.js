const nextJest = require("next/jest");
const createJestConfig = nextJest({
    dir: "./",
});
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    rootDir: '.',
    roots: [
      '<rootDir>/src',
      '<rootDir>/__tests__'
    ],
    testEnvironment: "jest-environment-jsdom",
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/index.ts',
    ],
};
module.exports = createJestConfig(customJestConfig);