const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function (done) {
    gulp.src('scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError)) // Using gulp-sass
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(['last 15 versions', '< 1%', 'ie 8', 'ie 7', 'safari 13'], { cascade: true }))
        .pipe(sourcemaps.write())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());

    done();
});

gulp.task('serve', function (done) {

    browserSync.init({
        server: 'dist',
        startPath: 'main.html',
        notify: false
    });

    gulp.watch(["scss/*.scss", "scss/**/*.scss"], gulp.series('sass'));
    gulp.watch("dist/*.html").on('change', () => {
        browserSync.reload()
        done();
    });
    done();
})




gulp.task('default', gulp.series(['sass', 'serve']));

