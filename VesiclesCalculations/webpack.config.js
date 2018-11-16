const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.mjs', '.ts', '.tsx', '.js', '.json'],
        alias: {
            '@fortawesome/fontawesome-free$': '@fortawesome/fontawesome-free-solid/shakable.es.js',
        }
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            loader: 'babel-loader',
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.(png|jp(e*)g|svg|ico)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024,
                    name: '[name].[ext]'
                }
            }],
            exclude: /node_modules/
        },
        {
            test: /\.ico/,
            use: 'file-loader?name=[name].[ext]',
            include: /assets/
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=public/fonts/[name].[ext]'
        }]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '\\src\\index.html',
        }),
        new BundleAnalyzerPlugin()
    ],
}