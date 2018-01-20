const gulp = require('gulp');
// const gulpSass = require('gulp-sass');
const gulpStylus = require('gulp-stylus');
const gulpAutoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-tinypng');
var minifyCSS = require('gulp-minify-css');

gulp.task('css', ()=>
    gulp.src('./src/scss/**/*.styl')
        .pipe(gulpStylus())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
);

gulp.task('js', ()=> 
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
);

gulp.task('img', () =>
    gulp.src(['./src/img/*.*'])
        .pipe(imagemin('foEXuNwCpuuRiRctIS3O8uSbiLLa1cby'))
        .pipe(gulp.dest('./dist/img/'))
);

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.styl', ['css']);
    gulp.watch('./src/js/*.js', ['js']);
});
