/*
  ___ _        _        
 / __| |_ _  _| |___ ___
 \__ \  _| || | / -_|_-<
 |___/\__|\_, |_\___/__/
          |__/          

 Compile all SASS in the ./src/styles directory, autoprefix it and save a
 non-minified version for the local webserver to ./public/css.

 No sourcemaps here (yet).

*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
  return gulp.src('./src/styles/**/*.sass')
    .pipe(sass({'style': 'expanded'}))
    .on('error', handleErrors)
    .pipe(autoprefixer({
      'browsers': ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
      'cascade': false
    }))
    .pipe(gulp.dest('./public/css'));
});
