const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'dog',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader'
        }, {
            test: /\.css/,
            include: path.resolve(__dirname, 'src'),
            loader: 'css-loader'
        }]
    }
}