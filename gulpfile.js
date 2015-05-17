var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync({
    proxy: {
      target: "http://localhost:2368",
      middleware: function (req, res, next) {
        console.log(req.url);
        next();
      }
    }
  });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
  .pipe(sass({
        style: 'compressed',
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        }
    }))
  .pipe(gulp.dest('assets/css'))
  .pipe(reload({stream:true}));
});

// Reload all Browsers
gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['*.html', 'js/*.js', 'partials/*.html'], ['bs-reload']);
});
