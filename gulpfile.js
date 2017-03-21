var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

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

gulp.task('watch', function() {
 gulp.watch('./public/app/**/*.js', ['scripts']);
 gulp.watch('./public/**/*.css', ['css']);
});

gulp.task('default',['watch']);

