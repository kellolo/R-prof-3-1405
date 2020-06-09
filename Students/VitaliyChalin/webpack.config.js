const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        // точка входа, путь до файла до index.js
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: path.join('js', 'bundle.js')
    },
    target: 'web', // тип сборки
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {"loose": true}
                        ]
                    ]

                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'public', 'index.html')
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        open: false,
        proxy: {
            '/api': {
                // contentBase: './dist',
                target: 'http://localhost:3300',
                pathRewrite: { '^/api' : '' },
                secure: false,
                changeOrigin: true
            }
        }
    }
}