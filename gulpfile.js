'uses strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const gzip = require('gulp-gzip');

sass.compiler = require('node-sass');

function cleanUp() {
    return gulp.src(['./dist', './build'], {read: false, allowEmpty: true})
        .pipe(clean());
}

function build() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            "overrideBrowserslist": [
                "> 1%",
                "ie >= 8",
                "edge >= 13",
                "ie_mob >= 10",
                "ff >= 35",
                "chrome >= 18",
                "safari >= 6",
                "opera >= 15",
                "ios >= 6",
                "android >= 4"
            ]
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(cleanCSS())
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.css'
        }))
        .pipe(gulp.dest('./dist'))
}

function createDist() {
    return gulp.src('./build/*.css')
        .pipe(gzip())
        .pipe(gulp.dest('./dist'))
}

const cleanAndBuild = gulp.series(cleanUp, build)

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', cleanAndBuild)
})

exports.default = cleanAndBuild