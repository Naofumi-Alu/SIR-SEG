const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin =require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');

module.exports={
    entry: {
        index1: "./src/index.js",
        index2: "./src/index2.js",
    },
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
            },
            {
                test:/\.(png|jpe?g|gif|webp)$/i,
                use:['file-loader']
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
            filename:'[name].css'
        })
    ],
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: '[name].js'
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