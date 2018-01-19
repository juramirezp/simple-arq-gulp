const gulp = require('gulp');
// const gulpSass = require('gulp-sass');
const gulpStylus = require('gulp-stylus');
const gulpAutoprefixer = require('gulp-autoprefixer');

gulp.task('css', ()=>
    gulp.src('./src/scss/**/*.styl')
        .pipe(gulpStylus())
        .pipe(gulp.dest('./dist/css/'))
);