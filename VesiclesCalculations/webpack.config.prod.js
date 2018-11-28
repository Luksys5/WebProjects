const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.mjs', '.mts', '.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@fortawesome/fontawesome-free$': '@fortawesome/fontawesome-free-solid/shakable.es.js'
        }
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.tsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=public/fonts/[name].[ext]'
        },
        {
            test: /\.(png|jp(e*)g|svg|ico)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024,
                    name: '[name].[ext]'
                },
            },
            {
                loader: 'image-webpack-loader',
                // Specify enforce: 'pre' to apply the loader
                // before url-loader/svg-url-loader
                // and not duplicate it in rules with them
                enforce: 'pre'
            }],
            exclude: /node_modules/
        }
    ]},
    optimization: {
        minimizer: [new UglifyJsPlugin()],
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        splitChunks: {
          hidePathInfo: true,
          minSize: 30000,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '\\src\\index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: '[id].css'
        }),
        new BundleAnalyzerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        require('rollup-plugin-replace')({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        require('rollup-plugin-commonjs')(),
        require('rollup-plugin-uglify')(),
    ]
}