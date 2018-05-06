'use strict';

var gulp             = require('gulp'),
    connect          = require('gulp-connect'),
    sass             = require('gulp-sass'),
    postcss          = require('gulp-postcss'),
    autoprefixer     = require('autoprefixer'),
    perfectionist    = require('perfectionist'),
    uglify           = require('gulp-uglify'),
    concat           = require('gulp-concat-util'),
    minify           = require('gulp-clean-css'),
    rename           = require('gulp-rename'),
    rimraf           = require('rimraf'),
    opn              = require('opn'),
    notify           = require('gulp-notify'),
    pug              = require('gulp-pug'),
    gulpif           = require('gulp-if'),
    emitty           = require('emitty').setup('app', 'pug');

// Paths
var Paths = {
    DIST:  'dist',
    PUG:   'app/*.pug',
    JS:    'app/assets/js/custom/',
    B_JS:  'app/assets/js/bootstrap/',
    CSS:   'app/assets/css/',
    PHP:   'app/assets/php/',
    IMG:   'app/assets/images/',
    FONTS: 'app/assets/fonts/**/*.*',
    VIDEO: 'app/assets/video/**/*.*'
}

// Server
gulp.task('server', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    });
    opn('http://localhost:8888');
});

// PHP
gulp.task('php', function() {
    gulp.src(Paths.PHP + '*.php')
        .pipe(gulp.dest(Paths.DIST + '/assets/php/'))
        .pipe(connect.reload());
});

// Pug
gulp.task('pug', function() {
    gulp.src(Paths.PUG)
        .pipe(gulpif(global.watch, emitty.stream(global.emittyChangedFile)))
        .pipe(pug({
            pretty:  '    ',
            doctype: 'html'
        }))
        .on('error', notify.onError())
        .pipe(gulp.dest((Paths.DIST)))
        .pipe(connect.reload())
});

// SCSS
gulp.task('scss', function () {

    var processors = [
        autoprefixer(),
        perfectionist({
            maxAtRuleLength: false,
            maxSelectorLength: 1
        })
    ];

    gulp.src('app/assets/scss/template.scss')
        .pipe(sass())
        .on('error', notify.onError())
        .pipe(postcss(processors))
        .pipe(gulp.dest(Paths.DIST + '/assets/css/'))
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(Paths.DIST + '/assets/css/'))
        .pipe(connect.reload());
});

// JQ
gulp.task('js-jquery', function() {
    gulp.src([
        Paths.JS + 'jquery-3.2.1.min.js',
        Paths.JS + 'popper.min.js',
    ])
    .pipe(gulp.dest(Paths.DIST + '/assets/js/custom/'))
    .pipe(connect.reload());
});

// JS
gulp.task('js-plugins', function() {
    gulp.src([
        Paths.JS + 'appear.js',
        Paths.JS + 'gmap3.js',
        Paths.JS + 'imagesloaded.pkgd.js',
        Paths.JS + 'isotope.pkgd.js',
        Paths.JS + 'jqBootstrapValidation.js',
        Paths.JS + 'jquery.superslides.js',
        Paths.JS + 'jquery.fitvids.js',
        Paths.JS + 'jquery.magnific-popup.js',
        Paths.JS + 'jquery.easypiechart.js',
        Paths.JS + 'owl.carousel.js',
        Paths.JS + 'twitterFetcher.js',
        Paths.JS + 'jquery.countTo.js',
        Paths.JS + 'jquery.sticky-kit.js',
        Paths.JS + 'jquery.singlePageNav.js',
        Paths.JS + 'jarallax.js',
        Paths.JS + 'jarallax-video.js',
        Paths.JS + 'submenu-fix.js',
        Paths.JS + 'prism.js',
    ])
    .pipe(gulp.dest(Paths.DIST + '/assets/js/custom/'))
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(Paths.DIST + '/assets/js/custom/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({preserveComments: 'license'})).on('error', notify.onError())
    .pipe(gulp.dest(Paths.DIST + '/assets/js/custom/'))
    .pipe(connect.reload());
});

// Bootstrap JS
gulp.task('js-bootstrap', function() {
    gulp.src(Paths.B_JS + '*.js')
    .pipe(gulp.dest(Paths.DIST + '/assets/js/bootstrap/').on('error', notify.onError()))
    .pipe(connect.reload());
});

// JS Core
gulp.task('js-core', function() {
    gulp.src(Paths.JS + 'custom.js')
    .pipe(gulp.dest(Paths.DIST + '/assets/js/custom/').on('error', notify.onError()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(gulp.dest(Paths.DIST + '/assets/js/custom/'))
    .pipe(connect.reload());
});

// CSS
gulp.task('css', function() {
    gulp.src(Paths.CSS + '*.css')
        .pipe(gulp.dest(Paths.DIST + '/assets/css/'))
        .pipe(concat('plugins.css'))
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(Paths.DIST + '/assets/css/'))
        .pipe(connect.reload());
});

// Images
gulp.task('images', function() {
    gulp.src(Paths.IMG + '**/*.*')
        .pipe(gulp.dest(Paths.DIST + '/assets/images/'))
        .pipe(connect.reload());
});

// Fonts
gulp.task('fonts', function() {
    gulp.src(Paths.FONTS)
        .pipe(gulp.dest(Paths.DIST + '/assets/fonts/'))
        .pipe(connect.reload());
});

// Video
gulp.task('video', function() {
    gulp.src(Paths.VIDEO)
        .pipe(gulp.dest(Paths.DIST + '/assets/video/'))
        .pipe(connect.reload());
});

// Default task
gulp.task('default', ['build', 'server', 'watch']);

// Build task
gulp.task('build', [
    'pug',
    'scss',
    'js-jquery',
    'js-core',
    'js-plugins',
    'js-bootstrap',
    'css',
    'images',
    'fonts',
    'video',
    'php'
]);

// Watch
gulp.task('watch', function() {
    global.watch = true;
    gulp.watch('app/**/*.pug', ['pug']).on('all', (event, filepath) => {
        global.emittyChangedFile = filepath;
    });;
    gulp.watch('app/assets/scss/**/*.scss', ['scss']);
    gulp.watch(Paths.JS + '*.js', ['js-jquery']);
    gulp.watch(Paths.JS + 'custom.js', ['js-core']);
    gulp.watch(Paths.JS + '*.js', ['js-plugins']);
    gulp.watch(Paths.CSS + '*.css', ['css']);
    gulp.watch(Paths.PHP + '*.php', ['php']);
    gulp.watch(Paths.IMG + '**/*.*', ['images']);
    gulp.watch(Paths.B_JS + '*.js', ['js-bootstrap']);
    gulp.watch(Paths.FONTS, ['fonts']);
});

// Clean dist folder
gulp.task('clean', function (cb) {
    rimraf(Paths.DIST + '/*', cb);
});