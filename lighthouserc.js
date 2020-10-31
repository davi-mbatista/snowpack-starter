module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:50000/'],
            startServerCommand: 'npm run serve'
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
};
