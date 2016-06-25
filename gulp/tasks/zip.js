'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip', function(){
  var isProd = process.env.NODE_ENV === 'production';

  return gulp.src(['dist/**/*'])
    .pipe(zip('wbell_angular_test_'+(isProd?'(prod)_': '')+(new Date().toISOString())+'.zip'))
    .pipe(gulp.dest('packaged'));
});
