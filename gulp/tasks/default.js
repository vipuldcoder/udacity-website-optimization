'use strict';

// Necessary Plugins
var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['html', 'css', 'js', 'imagemin',
  'watch', 'browser-sync']);
