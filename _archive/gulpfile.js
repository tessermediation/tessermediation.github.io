var gulp   = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');


gulp.task('default', function() {

  return gulp.src('style.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss([ autoprefixer({ browsers: ['last 2 versions','ie >= 9'] }) ]))
    .pipe($.cssmin())
    .pipe(gulp.dest('./'));

});
