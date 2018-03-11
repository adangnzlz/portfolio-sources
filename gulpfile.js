const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const jshint = require('gulp-jshint');
const injectCSS = require('gulp-inject-css');
const runSequence = require('run-sequence');
const htmlmin = require('gulp-html-minifier');
const flatten = require('gulp-flatten');
const inject = require('gulp-inject');
const historyApiFallback = require('connect-history-api-fallback')
const concat = require('gulp-concat');
const include = require('gulp-html-tag-include');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const modernizr = require('gulp-modernizr');
const uglify = require('gulp-uglify');

//generate modernizr config file
gulp.task('modernizr', function () {
    return gulp.src([
        './src/**/*.js',
        './src/**/*.css',
        '!./modernizr*.js'])
        .pipe(modernizr('./modernizr.js'))
        .pipe(gulp.dest("build/"))
});

// compile js
gulp.task('concat', function () {
    var jsDest = 'docs/js'
    return gulp.src('./src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// sass processor
gulp.task('sass', function () {
    var cssDest = './docs/css';
    return gulp.src(['./src/**/*.scss'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(flatten())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(cssDest)).on('end', function () {
            gulp.src(['./docs/index.html', './docs/about.html'])
                .pipe(injectCSS())
                .pipe(gulp.dest('./docs/')).on('end', function () {
                    gulp.src(cssDest, { read: false }).pipe(clean());
                });;
        });
});

// move assets to dist folder
gulp.task('assets', function () {
    gulp.src("./src/assets/**/*")
        .pipe(flatten())
        .pipe(gulp.dest('docs/assets'));
});

// move templates to dist folder and minify
gulp.task('templates', function () {
    gulp.src(["./src/templates/*.html", "./src/templates/popovers/*.html"])
        .pipe(include())
        .pipe(flatten())
        .pipe(gulp.dest('docs/templates')).on('end', function () {
            var files = ['./docs/templates/index.html', './docs/templates/about.html'];
            gulp.src(files)
                .pipe(htmlmin({ collapseWhitespace: true }))
                .pipe(gulp.dest('./docs/')).on('end', function () {
                    gulp.src(files, { read: false }).pipe(clean());
                });
            gulp.src(['./docs/templates/popover*.html'])
                .pipe(htmlmin({ collapseWhitespace: true }))
                .pipe(gulp.dest('./docs/templates'));
        });

});




// watch files for changes and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: ['.tmp', 'docs'],
            middleware: [historyApiFallback()]
        },
        notify: false
    });
    gulp.watch(['src/**/*'], function (callback) { runSequence('assets', 'templates', 'sass', 'concat') });
    gulp.watch(['docs/**/*'], reload);
});


gulp.task('default', function (callback) { runSequence('assets', 'templates', 'sass', 'concat', 'serve') });