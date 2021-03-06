let path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'),
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module:{
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
}