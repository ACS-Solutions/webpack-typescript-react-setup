var gulp = require('gulp');
var webpack = require('webpack');
var runSequence = require('run-sequence');
var webserver = require('gulp-server-livereload');
/*
  Configure ports for the development server, try to keep unique for each
  project so you can run concurrently without conflicts.
*/
var devserver = {
  port: 8123,
  livereload: 35674
}

var paths = {
  static: './static/**/*.*',
  dist: './dist',
  appSource: './src/**/*.*'
};

gulp.task('copy', function(cb){
  gulp.src(paths.static)
    .pipe(gulp.dest(paths.dist));
  cb()
});

gulp.task('webpack', function(cb){
  webpack(
    require('./webpack.config.js'),
    function(err, stats) {
      if(stats) console.log(stats.toString('normal'));
      if(err) console.log(err);
      cb()
    }
  );
});

gulp.task('watch', function(){
  // watch for file changes
  gulp.watch(paths.appSource, ['webpack']);
  gulp.watch(paths.static, ['copy']);

  // initially run some tasks
  runSequence('copy','webpack',function(){
    gulp.src('./dist')
      .pipe(webserver({
        port: devserver.port,
        livereload: {
          enable: true,
          port: devserver.livereload
        },
        open: true
      }));
  });
});
