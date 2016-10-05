/**
 * laravel-elixir-pug
 *
 * Author: Kevin Gravier <kevin@mrkmg.com>
 * License: MIT
 */

var Elixir = require('laravel-elixir');
var Gulp = require('gulp');

var Extend = require('extend');
var Pick = require('object.pick');
var Pug = require('gulp-pug');
var Plumber = require('gulp-plumber');
var Rename = require('gulp-rename');
var Changed = require('gulp-changed');
var PugInheritance = require('gulp-pug-inheritance');
var Ignore = require('gulp-ignore');

var Task = Elixir.Task;

var pug_task_increment = 0;

Elixir.extend('pug', function (options)
{
    options = Extend({
        blade: false,
        pretty: true,
        src: 'resources/assets/pug/',
        exclude: '_partials/**/*',
        search: '**/*.pug',
        dest: options.blade ? 'resources/views' : 'public/html',
        additional_watches: [],
        pugExtension: '.pug'
    }, options);

    var gulp_src = [
        options.src + options.search
    ];

    var pug_options = Pick(
        options,
        [
            'basedir',
            'doctype',
            'pretty',
            'filters',
            'self',
            'debug',
            'compileDebug',
            'locals',
            'globals',
            'cache',
            'inlineRuntimeFunctions',
            'name'
        ]
    );

    var watch = [options.src + options.search].concat(options.additional_watches);
    var extension = options.blade ? '.blade.php' : '.html';

    return new Task('pug_' + (pug_task_increment++), function ()
    {
        return Gulp
            .src(gulp_src)
            .pipe(Plumber())
            .pipe(Changed(options.dest, {extension: extension}))
            .pipe(PugInheritance({basedir: options.src, extension: options.pugExtension, skip: 'node_modules'}))
            .pipe(Ignore.exclude(options.exclude))
            .pipe(Pug(pug_options))
            .pipe(Rename(function (path)
            {
                path.extname = extension;
            }))
            .pipe(Gulp.dest(options.dest))
    }).watch(watch);
});
