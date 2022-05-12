/*
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');




module.exports={
    entry: {
        index1: "./src/Client/index.js",
        index2: "./src/Client/index2.js",
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
            },
            {
                test: /\.ejs$/,
                loader : "ejs-loader",
                options: {
                    variable: 'data',
                    interpolate: '\\{\\{(.+?)\\}\\}',
                    evaluate: '\\[\\[(.+?)\\]\\]'
                }
            },

        ]
    },
    plugins:[
           
            new HtmlWebpackPlugin(
                {
                    filename:"index.html",
                    template:"./src/Client/index.html",
                    templateParameters:{
                        title: 'SIR SEG'
                    }
                }
            )
            ,
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
        // usamos LiveReloadPlugin en lugar de dev server con el fin de usar un servidor de expess personalizado, este solo recarga la pagina
        ,
        new LiveReloadPlugin({
            appendScriptTag:true
        })

    ],
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: '[name].js'
    },

      //Devserver 
        
            //serveidor de desarrollo de webpack con live reload incluido
            // utiliza hot module reloading para ser mas veloz
        devServer: {
            static: {
                directory: path.join(__dirname, "build/")
            },
            port: 5000,
            hot: true,
            open:true
        }
    

}