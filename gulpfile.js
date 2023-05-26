const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const obfuscate = require('gulp-obfuscate');

function compileSass(){
    return gulp.src('./source/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/css'));
}

function compileJavaScript(){
    return gulp.src('./source/scripts/**/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./build/scripts'));
}

function compressImages(){
    return gulp.src('./source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

exports.default = function(){
    gulp.watch('./source/scss', {ignoreInitial: false}, 
    gulp.series(compileSass));
    
    gulp.watch('./source/scripts', {ignoreInitial: false}, 
    gulp.series(compileJavaScript));

    gulp.watch('./source/images', {ignoreInitial: false}, 
    gulp.series(compressImages));
}
// // gulp.task('default', gulp.series(compileSass));
// exports.default = gulp.parallel(compileSass, compileJavaScript);