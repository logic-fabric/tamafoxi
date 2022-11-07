"use strict";

const gulp = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

function watch() {
  gulp.watch("./src/css/scss/**/*.scss", buildCSS);
  gulp.watch("./src/css/main.css", autoprefixCSS);
}

function buildCSS() {
  return gulp
    .src("./src/css/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./src/css"));
}

function autoprefixCSS() {
  return gulp
    .src("./src/css/main.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("./src/css/prefixed"));
}

module.exports = {
  watch: watch,
  buildCSS: buildCSS,
  autoprefixCSS: autoprefixCSS,
};
