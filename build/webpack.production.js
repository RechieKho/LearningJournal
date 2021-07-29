const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PostCSSLoader = require("../build.ext/css-ext-loader").PostCSSLoader
const CSSLoader = require("../build.ext/css-ext-loader").CSSLoader
const CSSModuleLoader = require("../build.ext/css-ext-loader").CSSModuleLoader

module.exports = env => {
    return {
        module:{
            rules: [{
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, CSSLoader, PostCSSLoader ]
            },
            {
                test: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, CSSModuleLoader, PostCSSLoader]
            }
        ]
        },
        plugins: [new MiniCssExtractPlugin()]
    }
}