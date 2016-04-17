Laravel Elixir Angularify
============================

Current Version: 1.0.0

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
                // File names to look for, useful if you are still naming files .jade
                search: '**/*.pug',
                // If blade is true, output to resources/views, otherwise public/html
                dest: 'public/html',
                // Any additional watches
                additional_watches: []
            });
    });

You can also pass the following options will pass directly to gulp-pug

    filename
    doctype
    pretty
    self
    debug
    compileDebug
    cache
    compiler
    parser
    globals

See the [Pug API](https://www.pug-lang.com/api) for an explanation of these options.

Then run `gulp`

License: MIT