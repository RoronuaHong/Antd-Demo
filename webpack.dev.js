const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./src",
        compress: true,
        port: 8888,
        host: "0.0.0.0",
        proxy: {
            "/manage/": "http://hrsaas.wintalent.cn:8080",
            "/api": {
                target: "http://localhost:3001",
                secure: false
            }
        }
    }
});