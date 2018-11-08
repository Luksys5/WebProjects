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
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader'
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: '[name].[ext]'
                }
            }]
        },
        {
            test: /\.ico/,
            use: 'file-loader?name=[name].[ext]',
            include: /assets/
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '\\src\\index.html',
        })
    ],
}