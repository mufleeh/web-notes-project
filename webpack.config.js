// filepath: /web-notes-project/webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'react/jsx-runtime': require.resolve('react/jsx-runtime'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'public'),
            },
            {
                directory: path.join(__dirname, 'notes'),
                publicPath: '/notes',
            },
        ],
        compress: true,
        port: 3001,
    },
};