module.exports = {
    mount: {
        '../public': '/',
        '../src': '/dist'
    },
    plugins: [
        [
            '@snowpack/plugin-typescript',
            {
                args: '--project src/tsconfig.json'
            }
        ],
        '@prefresh/snowpack'
    ],
    packageOptions: {
        knownEntrypoints: ['preact'],
        installTypes: true
    }
};
