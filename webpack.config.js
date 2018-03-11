const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!less!css'
            }
        ]
    },
    /*externals: {
        moment: 'moment'
    },*/
    plugins: [
        new webpack.optimize.UglifyJsPlugin( {
            minimize : true,
            sourceMap : false,
            mangle: true,
            compress: {
                warnings: false
            }
        } )
    ]
};


module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/index.js'),
        output: {
            filename: 'v-strength.min.js',
            libraryTarget: 'window',
            library: 'VueStrength',
        }
    }),
    /*merge(config, {
        entry: path.resolve(__dirname + '/src/strengthClass.js'),
        output: {
            filename: 'vue-clock.min.js',
            libraryTarget: 'window',
            library: 'VueClock',
        }
    }),*/
    merge(config, {
        entry: path.resolve(__dirname + '/src/strength.vue'),
        output: {
            filename: 'v-strength.js',
            libraryTarget: 'umd',
            library: 'v-strength',
            umdNamedDefine: true
        }
    })
];