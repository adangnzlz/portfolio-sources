const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const jshint = require('gulp-jshint');
const injectCSS = require('gulp-inject-css');
const runSequence = require('run-sequence');
const htmlmin = require('gulp-html-minifier');
const minify = require('gulp-minify');
const flatten = require('gulp-flatten');
const inject = require('gulp-inject');
const historyApiFallback = require('connect-history-api-fallback')
const modRewrite = require('connect-modrewrite');
const concat = require('gulp-concat');
const include = require('gulp-html-tag-include');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');


gulp.task('html-include', function () {
    return gulp.src(['./docs/templates/index.html', './docs/templates/about.html'])
        .pipe(include())
        .pipe(gulp.dest('./docs/'));
});

gulp.task('cssmin', function () {
    return gulp.src('./docs/css/files/*')
        .pipe(cleanCSS({ compatibility: 'ie8'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./docs/css'));        
});

gulp.task('concat', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./docs/js/concat'));
});

gulp.task('clean', function () {
    return gulp.src(['./docs/js/concat', './docs/css/files'])
        .pipe(clean({ force: true }));
});


// sass processor
gulp.task('sass', function () {
    return gulp.src(['./src/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest('./docs/css/files'));
});
// minify html
gulp.task('minifyhtml', function () {
    gulp.src(['./docs/index.html', './docs/about.html'])
        .pipe(htmlmin({ collapseWhitespace: true, ignorePath: '/assets' }))
        .pipe(gulp.dest('./docs/'))
});

// minify js
gulp.task('jsmin', function () {
    gulp.src('docs/js/concat/main.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            exclude: ['tasks'],
            mangle: false,
            ignoreFiles: ['-min.js']
        }))
        .pipe(flatten())
        .pipe(gulp.dest('docs/js/'))
});

// check js errors
gulp.task('hint', function () {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// inject styles inline
gulp.task('index', function () {
    gulp.src(['./docs/index.html', './docs/about.html'])
        .pipe(injectCSS())
        .pipe(gulp.dest('./docs/'));
});
// inject assets on docs
gulp.task('assets', function () {
    gulp.src("./src/assets/**/*")
        .pipe(flatten())
        .pipe(gulp.dest('docs/assets'));
});
gulp.task('templates', function () {
    gulp.src("./src/templates/**/*")
        .pipe(flatten())
        .pipe(gulp.dest('docs/templates'));
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
    gulp.watch(['src/**/*'], function (callback) { runSequence('assets', 'templates', 'hint', 'sass', 'cssmin', 'concat', 'jsmin', 'html-include', 'minifyhtml', 'index', 'clean') });
    gulp.watch(['docs/index.html', 'docs/about.html'], reload);
});


gulp.task('default', function (callback) { runSequence('assets', 'templates', 'hint', 'sass', 'cssmin', 'concat', 'jsmin', 'html-include', 'minifyhtml', 'index', 'clean', 'serve') });