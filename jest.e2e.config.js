module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.e2e.{js,ts}',
        '<rootDir>/src/**/*.e2e.{spec,test}.{js,ts}'
    ]
};
