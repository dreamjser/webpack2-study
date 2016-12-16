'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const webpack = require('webpack-stream');
const webpackDevServer = require("webpack-dev-server");
const plumber = require('gulp-plumber');

// 路径
const paths = {
	entry: 'app.js',
	html: [
		'src/views/**'
	],
  js: [
    'src/js/**',
    'src/components/**'
  ]
};

// 监听的静态文件路径
const watchAssets = {
	sass: ['src/sass/**'],
	js: [
		'src/js/**',
		'src/components/**'
	]
}

// 启动本地服务器
gulp.task('connect', function () {
	connect.server({
		root: './',
		port: 8000,
		livereload: true
	});
});

// 开启node服务器
gulp.task('node', function () {
	return nodemon({
		script: 'app.js',
		ignore:[
      'node_modules/**',
      'gulpfile.js'
    ],
		env: {
			'NODE_ENV': 'development'
		}
	});
})

gulp.task('html', function () {
	gulp.src(paths.html)
		.pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src(paths.html)
    .pipe(connect.reload());
});

// js
gulp.task('webpack', function () {
	return gulp.src('')
		.pipe(plumber())
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest(''));
});

// 监听
gulp.task('watch', function () {
	gulp.watch(paths.html, ['html']);
  gulp.watch(paths.js, ['js']);
});

// 开发 task
gulp.task('build', function() {
  runSequence(['webpack'], 'connect', 'watch');
});
