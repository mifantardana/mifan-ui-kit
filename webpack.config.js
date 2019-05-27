var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('dist/assets')
    // Copy Assets
    // Images
    .copyFiles({
        from: './src/images',
        to: 'images/[path][name].[ext]',
        pattern: /\.(png|jpg|jpeg|svg)$/
    })
    // Fonts
    .copyFiles({
        from: './src/fonts',
        to: 'fonts/[path][name].[ext]',
        pattern: /\.(woff2?|eot|ttf|otf|svg)$/
    })
    // public path used by the web server to access the output path
    .setPublicPath('/assets')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('app', './src/javascripts/index.js')
    .addEntry('style', './src/styles/style.sass')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    //.enableVersioning(Encore.isProduction())

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()
    .enablePostCssLoader((options) => {
        options.config = {
        // the directory where the postcss.config.js file is stored
            path: ''
        };
    })

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
    .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();