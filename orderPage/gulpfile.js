var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var googleWebFonts = require('gulp-google-webfonts');

var options = { };
 
gulp.task('fonts', function () {
    return gulp.src('public/fonts/google-fonts/fonts.list')
        .pipe(googleWebFonts(options))
        .pipe(gulp.dest('public/fonts/google-fonts/included-fonts'))
        ;
    });
 
gulp.task('addFonts', ['fonts']);





/*Default gulp task to add postcss & sourcemap & minify */
gulp.task('default', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

		 // Find all `.scss` files from the `stylesheets/` folder
    return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        //browser versions specified
        .pipe(postcss([ autoprefixer({browsers: ["last 1 chrome version",
      "last 1 firefox version", "ie 11"]}) ]))
        //minify scss into css 
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'));
});

	//default gulp watch task
gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', ['default']);
});

