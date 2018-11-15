const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'


module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true }
                        }
                    ]
                })
            },{
                test: /\.(png|svg|jpg|jpeg|mp4|webm|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name].[ext]',
                            publicPath: '/dist'
                        }
                    }

                ]
            },{
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/fonts/[name].[ext]',
                            publicPath: '/dist'
                        }
                    }

                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        mode: process.env.NODE_ENV,
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};
