let mix = require('laravel-mix');

mix.setPublicPath('./')
.sass('src/scss/app.scss', 'dist/css')
.options({
    processCssUrls: false
})
