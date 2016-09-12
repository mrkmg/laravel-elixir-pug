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
var Print = require('gulp-print');
var Plumber = require('gulp-plumber');
var Rename = require('gulp-rename');
var Changed = require('gulp-changed');

var Task = Elixir.Task;

Elixir.extend('pug', function (options)
{
    var default_dest = options.blade ? 'resources/views' : 'public/html';

    options = Extend({
        blade: false,
        pretty: true,
        src: 'resources/assets/pug/',
        search: '**/*.pug',
        dest: default_dest,
        additional_watches: []
    }, options);

    var gulp_src = options.src + options.search;

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
    var extension = options.blade ? '.blade.php' : '.html'

    new Task('pug', function ()
    {
        return Gulp
            .src(gulp_src)
            .pipe(Plumber())
            .pipe(Changed(options.dest, {extension: extension}))
            .pipe(Pug(pug_options))
            .pipe(Rename(function (path)
            {
                path.extname = extension;
            }))
            .pipe(Gulp.dest(options.dest))
    }).watch(watch);
});
