const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/app.js',
    mode: 'development',
    devServer: {
        static: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/views', to: 'views' },
                { from: './src/styles', to: 'styles' },
            ]
        })
    ]
};