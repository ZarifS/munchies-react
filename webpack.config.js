var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./src/app.jsx', './src/sass/main.scss', './src/index.js'],
    output: { path: __dirname + "/src", filename: 'bundle.min.js' },
    plugins: [
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
        //new webpack.optimize.UglifyJsPlugin(), //minify everything
        //new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    ],
    watch: true,
    module: {
        loaders: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { // regular css files
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
        ]
    },
};