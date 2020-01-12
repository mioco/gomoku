const path = require('path');

module.exports = {
    entry: './index.mjs',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gomoku.js',
        libraryTarget: 'amd'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          }
        ]
    }
}