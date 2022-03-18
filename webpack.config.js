const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin =require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');

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
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test:/\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.svg$/,
                use:['@svgr/webpack']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
            templateParameters:{
                title: 'SIR SEG'
            }
        }),
        new MiniCssExtractPlugin({
            filename:'bundle.css'
        })
    ],
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