const { src, dest, watch, parallel, series } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
const brotli = require('gulp-brotli');
const replace = require('gulp-replace');

function js() {
  return src('src/*.js', { sourcemaps: true })
    .pipe(concat('main.js'))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(uglify())
    .pipe(dest('./dist', { sourcemaps: true }))
    .pipe(gzip({ append: true }))
    .pipe(dest('./dist', { sourcemaps: true }));
}

function gzipJs() {
  return src('./dist/main.js')
    .pipe(gzip({ append: true }))
    .pipe(dest('./dist'));
}

function brotliJs() {
  return src('./dist/main.js')
    .pipe(brotli.compress())
    .pipe(dest('./dist'));
}

var cbString = new Date().getTime();
function cacheBustTask() {
  return src('index.html')
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('./'));
}

exports.js = series(js, gzipJs, brotliJs);
exports.default = parallel(series(js, gzipJs, brotliJs), cacheBustTask);
exports.watch = () => {
  watch('src/*.js', series(js, gzipJs, brotliJs, cacheBustTask));
};
