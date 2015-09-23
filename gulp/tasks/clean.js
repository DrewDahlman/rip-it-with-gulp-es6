/*
   ___ _               
  / __| |___ __ _ _ _  
 | (__| / -_) _` | ' \ 
  \___|_\___\__,_|_||_|

 Get rid of everything Gulp generates. You can see the stripes ...

*/

var gulp  = require('gulp'),
    del = require('del');

gulp.task('clean', function() {
  del.sync(['dist/', 'public/css/', 'public/js/']);
});