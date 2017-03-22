var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  return gulp.src('./public/app/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(minify())
    .pipe(gulp.dest('./public/build/js'));
});

gulp.task('css', function(){
	return gulp.src('./public/**/*.css')
	.pipe(concat('stylesheet.css'))
	.pipe(cleanCss())
	.pipe(gulp.dest('./public/build/css'));
});
gulp.task('style-sass', function(){
	return gulp.src('./public/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./public/build/sass'))
});

gulp.task('watch', function() {
 gulp.watch('./public/app/**/*.js', ['scripts']);
 gulp.watch('./public/**/*.css', ['css']);
 gulp.watch('./public/**/*.scss',['style-sass']);
});

gulp.task('default',['watch']);

