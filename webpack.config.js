const path = require("path");
const webpack = require("webpack");

module.exports={
    entry: "./src/index.js",
    mode: "development",
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test:/\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build/")
        },
        port: 5000,
        hot: true,
        open:true
    }

}