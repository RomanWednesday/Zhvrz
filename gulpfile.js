const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function (done) {
    gulp.src('scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError)) // Using gulp-sass
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());

    done();
});

gulp.task('serve', function (done) {

    browserSync.init({
        server: 'dist',
        notify: false
    });

    gulp.watch("scss/*.scss", gulp.series('sass'));
    gulp.watch("dist/*.html").on('change', () => {
        browserSync.reload()
        done();
    });
    done();
})




gulp.task('default', gulp.series(['sass', 'serve']));

