var gulp         = require("gulp");
var browserSync  = require("browser-sync");
var reload       = browserSync.reload;
var sass         = require("gulp-sass");
var notify       = require("gulp-notify");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps   = require("gulp-sourcemaps");
var plumber      = require("gulp-plumber");

// browser-sync task for starting the server.
gulp.task("browser-sync", function() {
  browserSync({
    open: false,
    proxy: {
      target: "http://localhost:2368",
      middleware: function (req, res, next) {
        next();
      }
    }
  });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task("sass", function () {
  return gulp.src("scss/**/*.scss")
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: "compressed",
    errLogToConsole: false,
    onError: function(err) {
      return notify().write(err);
    }
  }))
  // .pipe(autoprefixer({
  //   browsers: ["> 5%, last 10 versions"],
  //   cascade: false,
  //   remove: true
  // }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("assets/css"))
  .pipe(reload({stream:true}));
});

// Reload all Browsers
gulp.task("bs-reload", function () {
  browserSync.reload();
});

// Default task to be run with `gulp`
gulp.task("default", ["sass", "browser-sync"], function () {
  gulp.watch(["scss/**/*.scss"], ["sass"]);
  gulp.watch(["*.html", "*.hbs", "partials/*.html", "partials/*.hbs", "js/*.js"], ["bs-reload"]);
});
