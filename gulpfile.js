const manifest = require('./package.json');
const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const express = require('express');
const isProduction = gutil.env.production;

function build (watch, callback) {
    var plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
        })
    ];

    if (isProduction) {
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    webpack({
        plugins: plugins,
        cache: true,
        watch: watch,
        module: {
            loaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
            ]
        },
        devtool: "#source-map",
        entry: path.resolve(__dirname, 'src/js/app.js'),
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'dist/js')
        }
    }, function (err, stats) {
        if (callback) callback();
    });
}

gulp.task('js', function (callback) {
    build(false, callback);
});

gulp.task('watch', function () {
    build(true);
});

gulp.task('express', function () {
    var app = express();
    app.use(express.static(__dirname + '/static'));
    app.use(express.static(__dirname + '/dist'));
    app.use(function (req, res) {
        res.sendFile(__dirname + '/static/index.html');
    });
    app.listen(process.env.PORT || 5000);
});

gulp.task('build', ['js']);
gulp.task('dev', ['build', 'watch', 'express']);
gulp.task('default', ['build']);