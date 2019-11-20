const path = require('path');

module.exports = {
    entry: './src/ts-tooling.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'ts-tooling.web.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
