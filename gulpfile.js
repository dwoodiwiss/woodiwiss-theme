var gulp         = require("gulp");
var browserSync  = require("browser-sync");
var reload       = browserSync.reload;
var sass         = require("gulp-sass");
var notify       = require("gulp-notify");
var Pageres      = require("pageres");
var autoprefixer = require("gulp-autoprefixer");

// browser-sync task for starting the server.
gulp.task("browser-sync", function() {
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
gulp.task("sass", function () {
  return gulp.src("scss/**/*.scss")
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
  .pipe(gulp.dest("assets/css"))
  .pipe(reload({stream:true}));
});

// Reload all Browsers
gulp.task("bs-reload", function () {
  browserSync.reload();
});

gulp.task("screenshot-desktop", function() {
  var pageres = new Pageres({delay: 1})
  .src("http://localhost:2368", ["1366x768"], {crop: false, filename: "<%= date %>-<%= time %>"})
  .dest(__dirname + "/resources/progress/desktop");

  pageres.run(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Desktop screenshot captured");
    };

  });
});

gulp.task("screenshot-mobile", function() {
  var pageres = new Pageres({delay: 1})
  .src("http://localhost:2368", ["iphone 5s"], {crop: false, filename: "<%= date %>-<%= time %>"})
  .dest(__dirname + "/resources/progress/mobile");

  pageres.run(function (err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Mobile screenshot captured");
    };

  });
});

// gulp.task("screenshots", ["screenshot-desktop", "screenshot-mobile"], function (){
//   console.log("--all captured--");
// });

// Default task to be run with `gulp`
gulp.task("default", ["sass", "browser-sync", "screenshot-desktop", "screenshot-mobile"], function () {
  gulp.watch(["scss/**/*.scss"], ["sass", "screenshots"]);
  gulp.watch(["*.html", "*.hbs", "partials/*.html", "partials/*.hbs", "js/*.js"], ["bs-reload"]);
});
