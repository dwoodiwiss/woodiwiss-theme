var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var cache        = require('gulp-cache');
var minifycss    = require('gulp-clean-css');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var runSequence  = require('run-sequence');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync({
    open: false,
    proxy: {
      target: 'http://localhost:2368'
    }
  });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/images/'));
});

// styles task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('styles', function(){
  gulp.src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({stream:true}))
});

// styles task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('stylesmin', function(){
  gulp.src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({stream:true}))
});

// scripts task, will run when any js files change & BrowserSync
// will auto-update browsers
gulp.task('scripts', function(){
  return gulp.src('src/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('build', function(){

});

// Default task to be run with `gulp`
gulp.task('default', ['browser-sync'], function(){
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch(['*.html', '*.hbs', 'partials/*.html', 'partials/*.hbs'], ['bs-reload']);
});

// Build all files ready for deployment
gulp.task('build', function(cb) {
  runSequence(
    ['stylesmin', 'scripts', 'images'],
    cb
  );
});
