const gulp = require('gulp');
// const gulpSass = require('gulp-sass');
const gulpStylus = require('gulp-stylus');
const gulpAutoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-tinypng');
const minifyCSS = require('gulp-minify-css');
const cmq = require('crlab-gulp-combine-media-queries');
const babel = require('gulp-babel');
const pug = require('gulp-pug2');
const htmlmin = require('gulp-html-minifier2');

gulp.task('css', ()=>
    gulp.src('./src/scss/**/*.styl')
        .pipe(gulpStylus())
        .pipe(cmq({
            log: true
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
);

gulp.task('js', ()=> 
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
);

gulp.task('img', () =>
    gulp.src(['./src/img/*.*'])
        .pipe(imagemin('foEXuNwCpuuRiRctIS3O8uSbiLLa1cby'))
        .pipe(gulp.dest('./dist/img/'))
);

gulp.task('pug', () =>  
    gulp.src('./src/pug/*.pug')
       .pipe(pug({ yourTemplate: 'Locals' }))
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('./dist/'))
);

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.styl', ['css']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/pug/includes/*.pug', ['pug']);
    gulp.watch('./src/pug/*.pug', ['pug']);
});