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
};
module.exports = createJestConfig(customJestConfig);