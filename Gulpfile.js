var gulp = require('gulp');
// create new instance of BrowserSync
var browserSync = require('browser-sync').create();

gulp.task('serve', function(gulpCallback) {
  browserSync.init({
    // serve out of ./
    server: './',
    open: true
  }, function callback() {
    // (server is now up)

    // set up watch to reload browsers when source changes
    gulp.watch(['./index.html', './js/**/*.js', './assets/**/*.css'], browserSync.reload);

    // notify gulp that this task is done
    gulpCallback();
  });
});

/*
DAN NOTE ON THIS GULPFILE
I ended up using the documentation from http://paulsalaets.com/posts/injecting-styles-in-page-with-browser-sync/

Basically, you just need to set up gulp serve as a task, and then plug in what you will watch

If you need to access a deeper directory while working on it, change the start path property within the init object
startPath: "./portfolio/lifeSciences.html",  --- like so
*/

