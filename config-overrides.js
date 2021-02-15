const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            'components': path.resolve(__dirname, 'src/components'),
            'images': path.resolve(__dirname, 'src/images'),
            'layout': path.resolve(__dirname, 'src/layout'),
            'logic': path.resolve(__dirname, 'src/logic'),
            'styles': path.resolve(__dirname, 'src/styles'),
            'mock': path.resolve(__dirname, 'src/mock'),
        },
    };
    return config;
};
