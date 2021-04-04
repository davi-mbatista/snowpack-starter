module.exports = {
    mount: {
        '../public': { url: '/', static: true },
        '../src': '/dist'
    },
    plugins: ['@prefresh/snowpack', '@snowpack/plugin-typescript']
};
