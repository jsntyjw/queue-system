const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        app: path.join(__dirname, './../', 'src/index.tsx')
    },
    output: {
        path: path.join(__dirname, './../','dist'),
        filename: '[name].js'
    },
    devServer: {
    	
    	historyApiFallback: true
	},
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                        
                        }
                    }
                    
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
            
            
        ]
        
    },
    
    resolve: {
        extensions :['.ts', '.tsx', '.js', '.jsx',".css"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'build/tpl/index.html'
        })
    ]
}