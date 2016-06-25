'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function() {

  var locals = {
    env: process.env.NODE_ENV,
    title: 'Healthcare.gov',
    css: 'css/app.css',
    cssMin: 'css/app.min.css',
    js: 'js/app.js',
    jsMin: 'js/app.min.js',
    appName: 'at'
  };

  return gulp.src('./src/index.jade')
    .pipe(jade({
      locals: locals,
      pretty: locals.env !== 'production'
    }))
    .pipe(gulp.dest('./dist'));

});
