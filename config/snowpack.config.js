module.exports = {
    mount: {
        '../public': { url: '/', static: true },
        '../src': '/dist'
    },
    plugins: ['@snowpack/plugin-typescript', '@prefresh/snowpack']
};
