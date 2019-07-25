const mix = require("laravel-mix");
require("laravel-mix-alias");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/**
 * Alias dedirectorios para WebPack
 */
mix.alias({
    "@js": "/resources/js",
    "@components": "/resources/js/components",
    "@layouts": "/resources/js/layouts",
    "@pages": "/resources/js/pages",
    "@sass": "/resources/sass"
});

/**
 * Opciones de WebPack
 */
mix.options({
    hmrOptions: {
        // Establecer el dominio para HMR
        host: process.env.MIX_HMR_HOST
    }
});

mix.js("resources/js/app.js", "public/js").sass("resources/sass/app.scss", "public/css");
