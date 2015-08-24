var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var clean = require('gulp-clean');
var useref = require('gulp-useref');
var debug = require('gulp-debug');
var cssBase64 = require('gulp-css-base64');
var sourcemaps = require('gulp-sourcemaps');


var bases = {
    code: 'code/',
    dist: 'public/',
    img: 'public/img',
    semanticFonts: 'public/components/semantic/dist/themes/default/assets/fonts'
};

var paths = {
    images : [
        'img/**/*'
    ],
    semanticFonts : [
        'components/semantic/dist/themes/default/assets/fonts/*'
    ],
    scripts: [
        'code/lib/jquery.form.min.js',
        'code/lib/s3upload.js',
        'code/lib/jquery.fileupload.js',

        'code/components/semantic/dist/semantic.js',
        'code/components/semantic/dist/components/accordion.min.js',
        'code/components/semantic/dist/components/button.min.js',
        'code/components/semantic/dist/components/checkbox.min.js',
        'code/components/semantic/dist/components/dropdown.min.js',
        'code/components/semantic/dist/components/form.min.js',
        'code/components/semantic/dist/components/input.min.js',
        'code/components/semantic/dist/components/progress.min.js',
        'code/components/semantic/dist/components/popup.min.js',
        'code/components/semantic/dist/components/transition.min.js',

        'code/components/jquery.nouislider.all.min.js',
        'code/components/redactor/redactor.new.js',
        'code/components/redactor/fullscreen.js',
        'code/components/redactor/fontsize.js',
        'code/components/redactor/fontspacing.js',
        'code/components/redactor/fontfacedropdown.js',
        'code/components/redactor/fontweightdropdown.js',
        'code/components/redactor/italicWidget.js',
        'code/components/redactor/boldWidget.js',
        'code/components/redactor/fontcolor.js',
        'code/components/redactor/fontBgColor.js',
        'code/components/redactor/undo.js',
        'code/components/redactor/textdirection.js',

        'code/lib/ui-lib.min.js',

        'code/instance.js',
        'code/toolbar.js',
        'code/utils.js',
        'code/UI.js',
        'code/DB.js',
        'code/fonts.js',
        'code/globals.js',
        'code/filters.js',
        'code/buildView.js',
        'code/DB.js',
        'code/upload.js',
        'code/buildView.js'

    ],
    widgetStyles : [
        'code/widget.css'
    ],

    styles : [
        'code/lib/ui-lib.min.css',

        'code/components/jquery.nouislider.min.css',
        'code/components/jquery.nouislider.pips.min.css',

        'code/components/semantic/dist/semantic.css',

        'code/components/semantic/dist/components/accordion.min.css',
        'code/components/semantic/dist/components/button.min.css',
        'code/components/semantic/dist/components/checkbox.min.css',
        'code/components/semantic/dist/components/dropdown.min.css',
        'code/components/semantic/dist/components/form.min.css',
        'code/components/semantic/dist/components/icon.min.css',
        'code/components/semantic/dist/components/input.min.css',
        'code/components/semantic/dist/components/progress.min.css',
        'code/components/semantic/dist/components/popup.min.css',
        'code/components/semantic/dist/components/transition.min.css',

        'code/components/redactor/redactor.css',
        'code/components/awesome.css',
        'code/components/redactor/icomoon.css',

        'code/anyfont.css'
    ],
    html   : [
        'both.html',
        'widget.html',
        'seo.html',
        'settings.html',
        'index.html',
        'demo.html'
    ],

    widgetJS : [
        'code/instance.js',
        'code/utils.js',
        'code/globals.js',
        'code/widget.js'
    ]
};

gulp.task('default', ['clean', 'copyHtml', 'buildJS', 'buildWidgetJS', 'buildCSS', 'buildWidgetCSS', 'copyImg', 'copySemanticFonts']);

gulp.task('clean', function ()
{
    return gulp.src(bases.dist)
        .pipe(clean());
});

gulp.task('copyHtml', ['clean'], function ()
{
    // Copy html
    gulp.src(paths.html, {cwd: bases.code})
        .pipe(useref())
        .pipe(debug())
        .pipe(gulp.dest(bases.dist))
    ;
});

gulp.task('copyImg', ['clean'], function ()
{
    // Copy semantic
    gulp.src(paths.images, {cwd: bases.code})
        .pipe(debug())
        .pipe(gulp.dest(bases.img))
    ;
});

gulp.task('copySemanticFonts', ['clean'], function ()
{
    // Copy semantic fonts
    gulp.src(paths.semanticFonts, {cwd: bases.code})
        .pipe(debug())
        .pipe(gulp.dest(bases.semanticFonts))
    ;
});

gulp.task('buildJS', ['clean'], function ()
{
    gulp.src(paths.scripts)


        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(concat('anyfont.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/'))
});

gulp.task('buildWidgetJS', ['clean'], function ()
{
    gulp.src(paths.widgetJS)
        .pipe(debug())
        .pipe(concat('widget.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/'))
});

gulp.task('buildCSS', ['clean'], function ()
{
    return gulp.src(paths.styles)
        .pipe(minifyCss())
        .pipe(debug())
        .pipe(concatCss("anyfont.css"))
        .pipe(gulp.dest('public/'));
});

gulp.task('buildWidgetCSS', ['clean'], function ()
{
    return gulp.src(paths.widgetStyles)
        .pipe(minifyCss())
        .pipe(debug())
        .pipe(concatCss("widget.min.css"))
        .pipe(gulp.dest('public/'));
});