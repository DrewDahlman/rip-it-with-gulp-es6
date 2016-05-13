/*
  ___         _      _
 / __| __ _ _(_)_ __| |_ ___
 \__ \/ _| '_| | '_ \  _(_-<
 |___/\__|_| |_| .__/\__/__/
               |_|

 Compile all ES6 in the ./src directory, bundle it and save a
 non-minified version for the local webserver to ./public/js.

 No sourcemaps here (yet).

*/

var browserify = require('browserify'),
    babelify = require('babelify'),
    gulp = require('gulp'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream');

gulp.task('scripts', function() {
  return browserify({
      'entries': ['./src/app.js'],
      'extensions': ['.js'],
      'transform': [['babelify', {'presets': ['es2015']}]]
    })
    .bundle()
    .on('error', handleErrors)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js'));
});
