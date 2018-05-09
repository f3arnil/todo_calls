const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssChunkHashPlugin = require(path.resolve(__dirname, 'node_modules/css-chunks-html-webpack-plugin/lib'));
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const DEV_SERVER_BUILD_PATH = 'build'

const config = {
    name: 'Daily calls ToDo app',
    context: __dirname,
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(
            __dirname,
            DEV_SERVER_BUILD_PATH
        ),
        publicPath: '/',
        filename: '[name].[hash:7].bundle.js',
        chunkFilename: '[name].[hash:7].bundle.js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js[x]?$/,
                loader: 'eslint-loader',
                exclude: /node_modules|contrib/,
                options: {
                    failOnWarning: false,
                    failOnError: true,
                }
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules|__test__/
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            exclude: [ 'fonts', 'images', 'json-data', 'favicon.ico'] 
        }),
        new CssChunkHashPlugin({ inject: 'head' }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            chunksSortMode: 'dependency'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(CURRENT_ENV)
            }
        })
    ],
    resolve: {
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ],
        alias: {
            'components':   path.resolve(__dirname, 'src/components/'),
            'containers':   path.resolve(__dirname, 'src/containers/'),
            'pages':        path.resolve(__dirname, 'src/pages/'),
            'helpers':      path.resolve(__dirname, 'src/helpers/'),
            'modules':      path.resolve(__dirname, 'src/modules/'),
        },
        extensions: ['.js', '.jsx', '.css', '.scss']
    }
}

module.exports = config