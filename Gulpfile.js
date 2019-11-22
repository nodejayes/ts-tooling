var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var merge = require('merge2');
var browserify = require('browserify');
var {exec} = require('child_process');
var fs = require('fs');

const APP_NAME = 'ts-tooling';
const TARGET_FOLDER_NODE = 'node';
const TARGET_FOLDER_WEB = 'web';

gulp.task('clean:node', () => {
    return gulp
        .src([
            './' + TARGET_FOLDER_NODE + '/',
        ], {
            read: false,
            allowEmpty: true,
        }).pipe(clean());
});

gulp.task('clean:web', () => {
    return gulp
        .src([
            './' + TARGET_FOLDER_WEB + '/',
        ], {
            read: false,
            allowEmpty: true,
        }).pipe(clean());
});

gulp.task('clean:web:tmp', () => {
    return gulp
        .src([
            './' + TARGET_FOLDER_WEB + '/tmp',
        ], {
            read: false,
            allowEmpty: true,
        }).pipe(clean());
});

gulp.task('build:node', () => {
    var tsproject = ts.createProject('./tsconfig.json');
    var t = tsproject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsproject());
    return merge(
        [
            t.js.pipe(sourcemaps.write('./')).pipe(gulp.dest('./' + TARGET_FOLDER_NODE)),
            t.dts.pipe(gulp.dest('./' + TARGET_FOLDER_NODE)),
        ]);
});

gulp.task('build:web', () => {
    var tsproject = ts.createProject('./tsconfig.web.json');
    return tsproject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsproject()).js
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest('./' + TARGET_FOLDER_WEB + '/tmp'));
});

gulp.task('minify:web', async () => {
    await new Promise((resolve, reject) => {
        exec('browserify --s ' + APP_NAME + ' -o ' + './' + TARGET_FOLDER_WEB + '/' + APP_NAME + '.js ' + './' + TARGET_FOLDER_WEB + '/tmp/' + APP_NAME + '.web.js', (err) => {
            if (err) {
                console.info(err);
                reject();
                return;
            }
            resolve();
        });
    });
    return gulp.src([
        './' + TARGET_FOLDER_WEB + '/' + APP_NAME + '.js'
    ])
        .pipe(uglify())
        .pipe(concat(APP_NAME + '.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./' + TARGET_FOLDER_WEB))
});

gulp.task('node', gulp.series([
    'clean:node',
    'build:node',
]));

gulp.task('web', gulp.series([
    'clean:web',
    'build:web',
    'minify:web',
    'clean:web:tmp',
]));

gulp.task('build:all', gulp.series([
    'node',
    'web',
]));
