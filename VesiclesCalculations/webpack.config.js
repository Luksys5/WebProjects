const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader'
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '\\src\\index.html',
        })
    ]
}