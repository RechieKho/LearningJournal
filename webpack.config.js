const merge = require("webpack-merge").merge
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const envConfig = env => require(`./build/webpack.${env.mode}`)(env)


module.exports = env => {
    return merge({
        mode: env.mode,
        entry: path.resolve(__dirname, "src", "index.tsx"),
        module:{
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: ["ts-loader"],
                    include: path.resolve(__dirname, "src")
                },
                {
                    test: /\.(jpg|jpeg|png)$/,
                    use: ["url-loader"]
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, env.mode),
            filename: "[name].js"
        },
        devServer:{
            port: 5000
        },
        plugins: [new HtmlWebpackPlugin({
            title: "Rechie&apos;s Learning Journal",
            template: path.resolve(__dirname, "src", "index.html")
        })],
        resolve:{
            extensions: [".ts", ".tsx", "..."]
        }
    }, envConfig(env))
}