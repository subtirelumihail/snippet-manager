var webpack = require('webpack');
var path    = require('path');
var config  = require('./config');

//Plugins
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssSourceMap = config.sourcemap ? "?sourceMap" : "";
var cssLoaderStr = [
  "css-loader" + cssSourceMap,
  "sass-loader" + (cssSourceMap ? cssSourceMap + '?outputStyle=expanded&sourceMap=true&sourceMapContents=true' : '')
].join("!");

var cssLoader = config.extract ? ExtractTextPlugin.extract("style", cssLoaderStr) : "style!" + cssLoaderStr;

module.exports = {
    cache: true,
    debug: true,
    devtool: config.sourcemap ? 'source-map' : null,
    entry: [
      './src/js/app.js'
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle[hash].js",
    },
    resolve: {
      root: [path.resolve('./src/js/')],
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: path.resolve('./src/js'),  loader: 'babel-loader'},
            { test: /\.s?css$/, loader: cssLoader },
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=1048576' }, // inline base64 URLs for <=1MB images, direct URLs for the rest
            { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({ template: "./src/index.html", inject: 'body' }),
      new ExtractTextPlugin("[contenthash].css")
    ]

};
