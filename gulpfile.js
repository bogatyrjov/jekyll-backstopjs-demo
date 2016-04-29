var gulp = require('gulp'),
    chug = require('gulp-chug');

gulp.task( 'reference', function () {
    gulp.src( './node_modules/backstopjs/gulpfile.js' )
        .pipe( chug({
            tasks:  [ 'reference' ],
            args: [ '--configPath=../../backstop.js' ]
        }));
});

gulp.task( 'test', function () {
    gulp.src( './node_modules/backstopjs/gulpfile.js' )
        .pipe( chug({
            tasks:  [ 'test' ],
            args: [ '--configPath=../../backstop.js' ]
        }));
});
