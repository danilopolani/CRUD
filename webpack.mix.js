const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Backpack maintainers use mix to:
 | - install and update CSS and JS assets;
 | - copy everything that needs to be published into src/public
 |
 | All JS will be bundled into one file (see bundle.js).
 |
 | How to use (for maintainers only):
 | - cd vendor/backpack/crud
 | - npm install
 | - npm run prod
 | (this will also publish the assets for you to test, so no need to do that too)
 */

// merge all needed JS into a big bundle file
mix.js('src/resources/assets/js/bundle.js', 'src/public/packages/backpack/base/js/');

// merge all needed CSS into a big bundle file
mix.sass('src/resources/assets/scss/bundle.scss', 'src/public/packages/backpack/base/css/')
	.options({
      processCssUrls: false
    });

// copy the Backstrap CSS
mix.copy('node_modules/@digitallyhappy/backstrap/dist/css/style.min.css', 'src/public/packages/@digitallyhappy/backstrap/css/style.min.css');
mix.copy('node_modules/@digitallyhappy/backstrap/dist/css/overlay.css', 'src/public/packages/@digitallyhappy/backstrap/css/overlay.css');

// copy fonts and other assets
mix.copy('node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css', 'src/public/packages/line-awesome/css/line-awesome.min.css')
    .copy('node_modules/line-awesome/dist/line-awesome/fonts', 'src/public/packages/line-awesome/fonts')
    .copy('node_modules/source-sans-pro', 'src/public/packages/source-sans-pro')
	.copy('node_modules/animate.css/animate.min.css', 'src/public/packages/animate.css/animate.min.css')
	.minify('node_modules/noty/lib/noty.css', 'src/public/packages/noty/noty.min.css')
	.copy('node_modules/noty/lib/noty.min.js', 'src/public/packages/noty/noty.min.js');


// copy CRUD filters JS into packages
mix
    .copy('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css', 'src/public/packages/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css')
    .copy('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js', 'src/public/packages/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js')
    .copy('node_modules/bootstrap-datepicker/dist/locales', 'src/public/packages/bootstrap-datepicker/dist/locales')

	.copy('node_modules/moment/min/moment.min.js', 'src/public/packages/moment/min/moment.min.js')
    .copy('node_modules/moment/min/locales.min.js', 'src/public/packages/moment/min/locales.min.js')

    .copy('node_modules/select2/dist/css/select2.min.css', 'src/public/packages/select2/dist/css/select2.min.css')
    .copy('node_modules/select2/dist/js/select2.full.min.js', 'src/public/packages/select2/dist/js/select2.full.min.js')
    .copy('node_modules/select2/dist/js/i18n', 'src/public/packages/select2/dist/js/i18n')

    .copy('node_modules/jquery-colorbox/example2/colorbox.css', 'src/public/packages/jquery-colorbox/jquery.colorbox.css')
    .copy('node_modules/jquery-colorbox/jquery.colorbox-min.js', 'src/public/packages/jquery-colorbox/jquery.colorbox-min.js')

    .copy('node_modules/jquery-ui-dist/jquery-ui.min.js', 'src/public/packages/jquery-ui-dist/jquery-ui.min.js')

    .copy('node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css', 'src/public/packages/select2-bootstrap-theme/dist/select2-bootstrap.min.css')

	.minify('node_modules/bootstrap-daterangepicker/daterangepicker.css', 'src/public/packages/bootstrap-daterangepicker/daterangepicker.css')
    .minify('node_modules/bootstrap-daterangepicker/daterangepicker.js', 'src/public/packages/bootstrap-daterangepicker/daterangepicker.js')

    .copy('node_modules/pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.min.css', 'src/public/packages/pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.min.css')
    .copy('node_modules/pc-bootstrap4-datetimepicker/build/js/bootstrap-datetimepicker.min.js', 'src/public/packages/pc-bootstrap4-datetimepicker/build/js/bootstrap-datetimepicker.min.js')

	.copy('node_modules/cropperjs/dist/cropper.min.css', 'src/public/packages/cropperjs/dist/cropper.min.css')
	.copy('node_modules/cropperjs/dist/cropper.min.js', 'src/public/packages/cropperjs/dist/cropper.min.js')

    .copy('node_modules/jquery-cropper/dist/jquery-cropper.min.js', 'src/public/packages/jquery-cropper/dist/jquery-cropper.min.js')

    // !TODO review plugins, skin and langs to optimize it
    .copy('node_modules/ckeditor', 'src/public/packages/ckeditor')

    .copy('node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css', 'src/public/packages/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css')
    .copy('node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js', 'src/public/packages/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js')

    .copy('node_modules/bootstrap-iconpicker/bootstrap-iconpicker/css/bootstrap-iconpicker.min.css', 'src/public/packages/bootstrap-iconpicker/bootstrap-iconpicker/css/bootstrap-iconpicker.min.css')
    .copy('node_modules/bootstrap-iconpicker/bootstrap-iconpicker/js/bootstrap-iconpicker.bundle.min.js', 'src/public/packages/bootstrap-iconpicker/bootstrap-iconpicker/js/bootstrap-iconpicker.bundle.min.js')

	.copy('node_modules/bootstrap-iconpicker/icon-fonts/elusive-icons-2.0.0/css/elusive-icons.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/elusive-icons-2.0.0/css/elusive-icons.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/elusive-icons-2.0.0/fonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/elusive-icons-2.0.0/fonts')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/font-awesome-5.12.0-1/css/all.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/font-awesome-5.12.0-1/css/all.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/font-awesome-5.12.0-1/webfonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/font-awesome-5.12.0-1/webfonts')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/ionicons-1.5.2/css/ionicons.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/ionicons-1.5.2/css/ionicons.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/ionicons-1.5.2/fonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/ionicons-1.5.2/fonts')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/map-icons-2.1.0/css/map-icons.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/map-icons-2.1.0/css/map-icons.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/map-icons-2.1.0/fonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/map-icons-2.1.0/fonts')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/material-design-1.1.1/css/material-design-iconic-font.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/material-design-1.1.1/css/material-design-iconic-font.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/material-design-1.1.1/fonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/material-design-1.1.1/fonts')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/octicons-2.1.2/css/octicons.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/octicons-2.1.2/css/octicons.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/octicons-2.1.2/fonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/octicons-2.1.2/fonts')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/typicons-2.0.6/css/typicons.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/typicons-2.0.6/css/typicons.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/typicons-2.0.6/fonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/typicons-2.0.6/fonts')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/weather-icons-1.2.0/css/weather-icons.min.css', 'src/public/packages/bootstrap-iconpicker/icon-fonts/weather-icons-1.2.0/css/weather-icons.min.css')
	.copy('node_modules/bootstrap-iconpicker/icon-fonts/weather-icons-1.2.0/fonts', 'src/public/packages/bootstrap-iconpicker/icon-fonts/weather-icons-1.2.0/fonts')

    .copy('node_modules/simplemde/dist', 'src/public/packages/simplemde/dist')

    .copy('node_modules/easymde/dist', 'src/public/packages/easymde/dist')

    .copy('node_modules/summernote/dist/summernote-bs4.min.css', 'src/public/packages/summernote/dist/summernote-bs4.min.css')
    .copy('node_modules/summernote/dist/summernote-bs4.min.js', 'src/public/packages/summernote/dist/summernote-bs4.min.js')
    .copy('node_modules/summernote/dist/font', 'src/public/packages/summernote/dist/font')
    .copy('node_modules/summernote/dist/plugin', 'src/public/packages/summernote/dist/plugin')
    // Lang is not being used currently
    // .copy('node_modules/summernote/dist/lang', 'src/public/packages/summernote/dist/lang')

    .copy('node_modules/tinymce', 'src/public/packages/tinymce')

    .minify('node_modules/nestedSortable/jquery.mjs.nestedSortable2.js', 'src/public/packages/nestedSortable/jquery.mjs.nestedSortable2.min.js')

    .copy('node_modules/datatables.net/js/jquery.dataTables.min.js', 'src/public/packages/datatables.net/js/jquery.dataTables.min.js')
	.copy('node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css', 'src/public/packages/datatables.net-bs4/css/dataTables.bootstrap4.min.css')
	.copy('node_modules/datatables.net-bs4/js/dataTables.bootstrap4.min.js', 'src/public/packages/datatables.net-bs4/js/dataTables.bootstrap4.min.js')
	.copy('node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js', 'src/public/packages/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js')
	.copy('node_modules/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css', 'src/public/packages/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.min.css')
	.copy('node_modules/datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4.min.js', 'src/public/packages/datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4.min.js')
	.copy('node_modules/datatables.net-responsive/js/dataTables.responsive.min.js', 'src/public/packages/datatables.net-responsive/js/dataTables.responsive.min.js')
	.copy('node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css', 'src/public/packages/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css')
	.copy('node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js', 'src/public/packages/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js')

    .copy('node_modules/places.js/dist/cdn/places.min.js', 'src/public/packages/places.js/dist/cdn/places.min.js');

// FOR MAINTAINERS
// copy asset files from Base's public folder the main app's public folder
// so that you don't have to publish the assets with artisan to test them
mix.copyDirectory('src/public', '../../../public')
