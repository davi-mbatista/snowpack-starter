module.exports = {
    ...require('@snowpack/app-scripts-preact/jest.config.js')(),
    rootDir: '../',
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,ts,tsx}',
        '<rootDir>/src/**/*.test.{js,ts,tsx}'
    ],
    testPathIgnorePatterns: ['/node_modules/', 'e2e.test']
};
