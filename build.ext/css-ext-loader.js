const autoprefixer = require('autoprefixer')
module.exports = {
    CSSModuleLoader : {
        loader: 'css-loader',
        options: {
            modules: {
                mode: 'local',
                exportLocalsConvention: "camelCase",
                localIdentName: '[name]_[local]_[hash:base64:5]',
            },
            importLoaders: 2,
            sourceMap: false,
        }
    },
    CSSLoader : {
        loader: 'css-loader',
        options: {
            modules: {
                mode: 'global',
                exportLocalsConvention: "camelCase"
            },
            importLoaders: 2,
            sourceMap: false,
        }
    },
    PostCSSLoader : {
        loader: 'postcss-loader',
        options: {
            sourceMap: false,
            postcssOptions:{
                plugins: () => [
                    autoprefixer({
                        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                    })
                ],
                ident: 'postcss'
            },
        }
    }   
}