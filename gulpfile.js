var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css'),
	runSeq = require('run-sequence'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	eslint = require('gulp-eslint'),
	rename = require('gulp-rename');

// Live reload CSS
gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./dist/css/style.min.css').pipe(livereload());
});

// gulp.task('compress', function() {
// 	gulp.src('./src/js/**/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('./dist/js'));
// })

gulp.task('lintJS', function () {
    return gulp.src(['./app/client/components/**/*.js', './server/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('buildJS', ['lintJS'], function () {
    return gulp.src(['./app/client/components/sm.module.js', './app/client/components/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
});

// Sass Compiled and Minify
gulp.task('buildCSS', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function () {

    livereload.listen();
    
    gulp.watch('app/client/**', function () {
        runSeq('buildJS', 'reload');
    });

     gulp.watch('src/scss/**', function () {
        runSeq('buildCSS', 'reloadCSS');
    });

    gulp.watch('app/server/**/*.js', ['lintJS']); 

});