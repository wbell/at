'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip', function(){
  return gulp.src(['dist/*/*'])
    .pipe(zip('wbell_angular_test_'+(new Date().toISOString())+'.zip'))
    .pipe(gulp.dest('packaged'));
});
