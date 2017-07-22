module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
    loaders: [{
         test: /\.jsx?$/,
        exclude: /node_modules/,
           use: {
        loader: 'babel-loader'
     
    }
    }]
},
resolve: {
    extensions: ['.js', '.jsx']
},
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public' 
    }
};