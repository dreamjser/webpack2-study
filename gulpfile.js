'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const reproxy = require("gulp-connect-reproxy");
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');

// 路径
const paths = {
  entry: 'app.js',
  server: [
    'app.js',
    'views/**'
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

// nodemon 的配置
const nodemonConfig = {
  script: paths.entry,
  ignore: [
    "node_modules/**",
    "gulpfile.js"
  ],
  env: {
    "NODE_ENV": "development"
  }
};

// 使用 nodemone 跑起服务器
gulp.task('node', function() {
  return nodemon(nodemonConfig);
});

// 启动服务器
gulp.task('connect', ['node'], function() {
  connect.server({
    name: 'Dist App',
    root: 'views',
    port: 4000,
    livereload: true,
    middleware: function(connect, options) {
      options.server = "192.168.36.66:8000";
      let proxy = new reproxy(options);

      return [proxy];
    }
  });
});

gulp.task('server', function() {
  gulp.src(paths.server)
    .pipe(connect.reload());
});

// 监听
gulp.task('watch', ['connect'], function() {
  gulp.watch(paths.server, ['server']);
});

// sass编译
gulp.task('sass', function() {
  return gulp.src(['src/sass/**/[^_]*.scss'])
    .pipe(development(sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(development(sourcemaps.write()))
    .pipe(production(autoprefixer()))
    .pipe(gulp.dest('src/css'));
});
