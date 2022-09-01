

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel')
const uglify = require('gulp-uglify');

function compilaSass() {
  return gulp.src('scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}
function pluginsCss() {
  return gulp
    .src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

function browser() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}
function gulpJs() {
  return gulp.src('js/scripts/*js')
    .pipe(concat('all.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}
function pluginsJs() {
  return gulp
    .src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}
function watch() {
  gulp.watch('scss/*.scss', compilaSass);
  gulp.watch('css/lib/*.css', pluginsCss);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/lib/*.js', pluginsJs);
  gulp.watch('js/scripts/*js', gulpJs);
}


gulp.task('pluginJs', pluginsJs);
gulp.task('pluginCss', pluginsCss);

gulp.task('browser', browser);
gulp.task('allJs', gulpJs);
gulp.task('sass', compilaSass);
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser', 'sass', 'pluginCss', 'allJs', 'pluginJs'));