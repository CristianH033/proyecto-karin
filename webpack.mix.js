const mix = require("laravel-mix");
require("laravel-mix-bundle-analyzer");
require("laravel-mix-alias");

if (!mix.inProduction()) {
  // mix.bundleAnalyzer();
}

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
  "@components": "/resources/js/components",
  "@plugins": "/resources/js/plugins",
  "@layouts": "/resources/js/layouts",
  "@routes": "/resources/js/routes",
  "@store": "/resources/js/store",
  "@utils": "/resources/js/utils",
  "@pages": "/resources/js/pages",
  "@fonts": "/resources/fonts",
  "@api": "/resources/js/api",
  "@sass": "/resources/sass",
  "@js": "/resources/js"
});

/**
 * Opciones de WebPack
 */
mix.options({
  hmrOptions: {
    // Establecer el dominio para HMR
    host: process.env.MIX_HMR_HOST,
    port: 8080
  }
});

/**
 * Configuraciones de WebPack
 */
mix.webpackConfig({});

mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css");
