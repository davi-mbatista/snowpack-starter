process.env.JEST_PLAYWRIGHT_CONFIG = './config/jest.playwright.config.js';

module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    rootDir: '../',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.e2e.{js,ts,tsx}',
        '<rootDir>/src/**/*.e2e.{spec,test}.{js,ts,tsx}'
    ]
};
