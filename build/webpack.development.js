module.exports = env => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        }
    }
}