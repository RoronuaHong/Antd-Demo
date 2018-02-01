const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common.js");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
    devtool: "cheap-module-source-map",
    plugins: [
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRadio: 0.8
        }),
        new CleanWebpackPlugin(["dist"]),
        new UglifyJSPlugin({
            uglifyOptions: {
                sourceMap: true,
                output: {
                    comments: false
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'DEBUG': true,
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),       //分配ID, 优先考虑使用最多的模块
        new webpack.optimize.DedupePlugin(),                //删除类似的重复代码
        new webpack.optimize.AggressiveMergingPlugin(),     //合并块
        new webpack.optimize.UglifyJsPlugin()
    ]
});
