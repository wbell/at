'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cssmin = require('gulp-cssmin');
var jeet = require('jeet');
var nib = require('nib');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus', function() {

  var isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    /**
     * minify css on prod
     */
    return gulp.src('./src/app.styl')
      .pipe(stylus({
        use: [jeet(), nib()],
        import: ['nib', 'jeet'],
        compress: true,
        'include css': true
      }))
      .pipe(cssmin())
      .pipe(gulp.dest('./dist/css'));

  } else {
    /**
     * generate sourcemaps
     */
    return gulp.src('./src/app.styl')
      .pipe(sourcemaps.init())
      .pipe(stylus({
        use: [jeet(), nib()],
        import: ['nib', 'jeet'],
        compress: false,
        'include css': true
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/css'));

  }
});
