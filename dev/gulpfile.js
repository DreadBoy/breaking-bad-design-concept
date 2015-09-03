'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  minify = require('gulp-minify'),
  minifyCss = require('gulp-minify-css'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('dev', ['sass:watch'])

gulp.task('default', ['dev'])

gulp.task('build-sass', function() {
  return gulp.src('./css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('build', ['build-sass'])
