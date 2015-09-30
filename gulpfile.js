var gulp = require('gulp');
var webpack = require('webpack');

var paths = {
  static: './static/**/*.*',
  dist: './dist'
};

gulp.task('copy', function(){
  return gulp.src(paths.static)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('webpack', function(){
  webpack(
    require('./webpack.config.js'),
    function(err, stats) {
      // console.log(err, stats);
    }
  );
});
