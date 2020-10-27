module.exports = {
    ...require('@snowpack/app-scripts-preact/jest.config.js')(),
    testPathIgnorePatterns: ['/node_modules/', 'e2e.test']
};
