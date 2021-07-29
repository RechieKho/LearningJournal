const PostCSSLoader = require("../build.ext/css-ext-loader").PostCSSLoader
const CSSLoader = require("../build.ext/css-ext-loader").CSSLoader
const CSSModuleLoader = require("../build.ext/css-ext-loader").CSSModuleLoader

module.exports = env => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /\.module\.css$/,
                    use: ['style-loader', CSSLoader, PostCSSLoader]
                },
                {
                    test: /\.module\.css$/,
                    use: ['style-loader', CSSModuleLoader, PostCSSLoader]
                }
            ]
        }
    }
}