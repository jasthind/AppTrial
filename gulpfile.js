'use strict';
var gulp = require('gulp');
//var browserSync = require('browser-sync').create();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function() {
    gulp.watch('**/*.html', reload);
    gulp.watch('**/*.js', reload);
    gulp.watch('**/*.css', reload);
});

/*gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'public/'
        }
    })
});
*/

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        baseDir: 'public/',
        proxy: "http://localhost:8080", // port of node server
    });
});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './server.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});