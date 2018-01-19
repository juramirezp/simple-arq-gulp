const gulp = require('gulp');
// const gulpSass = require('gulp-sass');
const gulpStylus = require('gulp-stylus');
const gulpAutoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');

gulp.task('css', ()=>
    gulp.src('./src/scss/**/*.styl')
        .pipe(gulpStylus())
        .pipe(gulp.dest('./dist/css/'))
);

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
});