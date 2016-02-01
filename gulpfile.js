'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
})

gulp.task('watch', function() {
  gulp.watch('./src/**/*.*', ['sass', 'copy-images', 'copy-js']);
})

gulp.task('copy-images', function() {
  return gulp.src('./src/images/*.*')
  .pipe(gulp.dest('./dist/images'))
})

gulp.task('copy-js', function () {
  return gulp.src('./src/js/*.*')
  .pipe(gulp.dest('./dist/js'))
})
