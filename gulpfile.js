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
	rename = require('gulp-rename'),
  angularFilesort = require('gulp-angular-filesort');
// TODO: browserify

// Live reload CSS
gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./dist/css/style.min.css').pipe(livereload());
});

gulp.task('lintJS', function () {
    return gulp.src(['./app/client/components/**/*.js', './app/server/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('buildJS', ['lintJS'], function () {
    return gulp.src('./app/client/components/**/*.js')
        .pipe(angularFilesort())
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('vendorJS', ['lintJS'], function () {
    return gulp.src('./src/vendor/*.js')
        .pipe(angularFilesort())
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/vendor'));
});

// Sass Compiled and Minify
gulp.task('buildCSS', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function () {

    livereload.listen();

    gulp.watch('app/client/**/*.js', function () {
        runSeq('buildJS', 'reload');
    });

    gulp.watch('src/vendor/*.js', function () {
        runSeq('vendorJS', 'reload');
    });

     gulp.watch('src/scss/**/*.scss', function () {
        runSeq('buildCSS', 'reloadCSS');
    });

    gulp.watch('app/server/**/*.js', ['lintJS']);

});

gulp.task('default', ['lintJS', 'buildJS', 'vendorJS', 'buildCSS', 'watch']);
