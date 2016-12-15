'use strict';

import connect = import 'gulp-connect';
import nodemon = import 'gulp-nodemon';

// 路径
const paths = {
    client: [
      'src/js/**/',
      'src/sass/**',
      'src/component/**'
    ],
    server: 'app.js'
};

// 监听的静态文件路径
const watchAssets = {
  scss: ['src/sass/**'],
  js: [
    'src/js/**',
    'src/components/**'
  ]
}

// nodemon 的配置
const nodemonConfig = {
    script: paths.server,
    ignore: [
        "node_modules/**"
    ],
    env: {
        "NODE_ENV": "development"
    }
};

// 使用 nodemone 跑起服务器
gulp.task('server', ['connect'], function() {
    return nodemon(nodemonConfig);
});

// scss编译
gulp.task('scss', function() {
  return gulp.src(['src/sass/**/[^_]*.scss'])
    .pipe(development(sourcemaps.init()))
    .pipe(scss().on('error', scss.logError))
    .pipe(development(sourcemaps.write()))
    .pipe(production(autoprefixer()))
    .pipe(gulp.dest('src/css'));
});

// 本地服务
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

// 监听
gulp.task('watch', function() {
  gulp.watch(watchAssets.scss, ['scss'])
    .on('change', function() {
      gulp.src(watchAssets.scss)
        .pipe(connect.reload());
    });
  gulp.watch(watchAssets.js, ['js'])
    .on('change', function() {
      gulp.src(watchAssets.js)
        .pipe(connect.reload());
    });
});
