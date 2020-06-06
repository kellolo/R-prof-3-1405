const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {        // точка входа, путь до messager.jsx
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: path.join('js', 'bundle.js')
    },
    target: 'web',      // 'node' для backend
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({     // template: 'path' для своего html
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'public', 'index.html')
        })
    ]
}