const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
    let isProduction;

    if (options && options.mode === 'production') {
        isProduction = true;
    } else {
        isProduction = false;
    }

    return {
        mode: isProduction ? 'production' : 'development',
        entry: __dirname + '/src/index.js',
        output: {
            path: __dirname + '/public',
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    exclude: /node_modules/,
                    use: 'file-loader?name=[name].[ext]'
                }
            ]
        },
        devtool: isProduction ? undefined : 'source-map',
        devServer: {
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html'
            })
        ]
    };
};