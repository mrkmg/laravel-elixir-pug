Laravel Elixir Pug
============================

Current Version: 1.3.1

A Laravel Elixir mix to compile Pug templates into either blade or html files.

    var elixir = require('laravel-elixir');

    require('laravel-elixir-pug');

    elixir(function (mix) {
        mix.pug();
    });

How to Install
--------------

Pug is a peer dependency, so you will need to install pug as well as laravel-elixir-pug

    npm install --save laravel-elixir-pug pug

Full Featured Example
---------------------

Example with all *(default)* options:

    var elixir = require('laravel-elixir');

    require('laravel-elixir-pug');

    elixir(function (mix) {
        mix
            .pug({
                // Compile to blade.php files or html files
                blade: false,
                // Pretty output or uglified
                pretty: true,
                // Source of pug files
                src: 'resources/assets/pug/',
                // Files to look for, useful if you are still naming files .jade
                search: '**/*.pug',
                // Files to skip, useful for partials
                exclude: '_partials/**/*',
                // Extension of pug files. Only needed to be set if still naming file .jade
                pugExtension: '.pug',
                // If blade is true, output to resources/views, otherwise public/html
                dest: 'public/html',
                // Any additional watches
                additional_watches: []
            });
    });

You can also pass the following options will pass directly to gulp-pug

    basedir
    doctype
    pretty
    filters
    self
    debug
    compileDebug
    locals
    globals
    cache
    inlineRuntimeFunctions
    name

See the [Pug API](https://www.jade-lang.com/api) for an explanation of these options.

Then run `gulp`

Other Notes
-----------

If you are still using the .jade extension, all your includes must have the extension included. For example:

    include _partials/header
    
will not work. You must use:

    include _partials/header.jade
    


License: MIT
