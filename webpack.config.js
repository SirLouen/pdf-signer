const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "fs": false
        }
    }
};