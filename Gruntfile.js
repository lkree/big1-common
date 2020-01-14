module.exports = function(grunt) {

  const imagemin = require('imagemin');
  const imageminJpegtran = require('imagemin-jpegtran');
  const imageminGifsicle = require('imagemin-gifsicle');
  const imageminOptipng = require('imagemin-optipng');
  const imageminSvgo = require('imagemin-svgo');

  const SCSS_SETTINGS = {
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    preset: ['catalog-seo'],
  };
  const JS_SETTINGS = {
    tasks: ['concat', 'babel', 'uglify'],
    preset: ['mainPage'],
  };

  const paths = {
    sass: {
      'users-styles': {
        'build/css/users-styles.css' : 'src/less/style.scss',
      },
      'lax-tecDoc-pages': {
        'build/css/lax-tecDoc-pages/style.css': 'src/css/lax-tecDoc-pages/style.scss',
      },
      'delivery': {
        'build/css/delivery/delivery--style.css' : 'src/css/delivery/delivery--style.scss',
      },
      'catalog-seo-old': {
        'build/css/catalog-seo/catalog-seo-style.css' :'src/css/catalog-seo/catalog-seo-style.scss',
      },
      'catalog-seo': {
        'build/css/catalog-seo-style-new.css' : 'src/css/catalog-seo/test/style.scss',
      },
      'basket-delivery': {
        'build/css/basket-delivery.css' : 'src/less/another-components/basket-index.scss',
      },
      'contacts': {
        'build/css/contacts.css' :'src/less/another-components/contacts.scss',
      },
    },
    cssmin: {
      'users-styles': {
        'build/css/users-styles.css' : 'build/css/users-styles.css',
      },
      'lax-tecDoc-pages': {
        'build/css/lax-tecDoc-pages/style.css' : 'build/css/lax-tecDoc-pages/style.css',
      },
      'delivery': {
        'build/css/delivery/delivery--style.css' : 'build/css/delivery/delivery--style.css',
      },
      'catalog-seo-old': {
        'build/css/catalog-seo/catalog-seo-style.css' : 'build/css/catalog-seo/catalog-seo-style.css',
      },
      'catalog-seo': {
        'build/css/catalog-seo-style-new.css' : 'build/css/catalog-seo-style-new.css',
      },
      'basket-delivery': {
        'build/css/basket-delivery.css' : 'build/css/basket-delivery.css',
      },
      'contacts': {
        'build/css/contacts.css' : 'build/css/contacts.css',
      },
    },
    autoprefixer: {
      'users-styles': {
        'build/css/users-styles.css' : 'build/css/users-styles.css',
      },
      'lax-tecDoc-pages': {
        'build/css/lax-tecDoc-pages/style.css' : 'build/css/lax-tecDoc-pages/style.css',
      },
      'delivery': {
        'build/css/delivery/delivery--style.css' : 'build/css/delivery/delivery--style.css',
      },
      'catalog-seo-old': {
        'build/css/catalog-seo/catalog-seo-style.css' : 'build/css/catalog-seo/catalog-seo-style.css',
      },
      'catalog-seo': {
        'build/css/catalog-seo-style-new.css' : 'build/css/catalog-seo-style-new.css',
      },
      'basket-delivery': {
        'build/css/basket-delivery.css' : 'build/css/basket-delivery.css',
      },
      'contacts': {
        'build/css/contacts.css' : 'build/css/contacts.css',
      },
    },
    uglify: {
      mainPage: {
        src: 'build/js/main-page-script.js',
        dest: 'build/js/main-page-script.js'
      },
      anyAutosPage: {
        src: 'build/js/any-autos-page-script.js',
        dest: 'build/js/any-autos-page-script.js'
      },
      autosPage : {
        src: 'build/js/autos-page-script.js',
        dest: 'build/js/autos-page-script.js'
      },
      delivery: {
        src: 'build/js/delivery-page-script.js',
        dest: 'build/js/delivery-page-script.js'
      },
      carTypeChooserModalWindow: {
        src:  'build/js/car-type-chooser-modal-window-script.js',
        dest: 'build/js/car-type-chooser-modal-window-script.js'
      },
      productCard: {
        src: 'build/js/product-card-script.js',
        dest: 'build/js/product-card-script.js'
      },
      trackers: {
        src: 'build/js/trackers-script.js',
        dest: 'build/js/trackers-script.js'
      },
      partsSoft: {
        src: 'build/js/parts-soft-script.js',
        dest: 'build/js/parts-soft-script.js'
      },
      seoCatalog: {
        src: 'build/js/catalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      },
      seoCatalogNew: {
        src: 'build/js/new-catalog-seo-script.js',
        dest: 'build/js/new-catalog-seo-script.js'
      },
      basketDelivery: {
          src: 'build/js/basket-delivery-page-script.js',
          dest: 'build/js/basket-delivery-page-script.js'
      },
    },
    babel: {
      mainPage: {
        src: 'build/js/main-page-script.js',
        dest: 'build/js/main-page-script.js'
      },
      anyAutosPage: {
        src: 'build/js/any-autos-page-script.js',
        dest: 'build/js/any-autos-page-script.js'
      },
      autosPage : {
        src: 'build/js/autos-page-script.js',
        dest: 'build/js/autos-page-script.js'
      },
      delivery: {
        src: 'build/js/delivery-page-script.js',
        dest: 'build/js/delivery-page-script.js'
      },
      carTypeChooserModalWindow: {
        src:  'build/js/car-type-chooser-modal-window-script.js',
        dest: 'build/js/car-type-chooser-modal-window-script.js'
      },
      productCard: {
        src: 'build/js/product-card-script.js',
        dest: 'build/js/product-card-script.js'
      },
      trackers: {
        src: 'build/js/trackers-script.js',
        dest: 'build/js/trackers-script.js'
      },
      partsSoft: {
        src: 'build/js/parts-soft-script.js',
        dest: 'build/js/parts-soft-script.js'
      },
      seoCatalog: {
        src: 'build/js/catalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      },
      seoCatalogNew: {
        src: 'build/js/new-catalog-seo-script.js',
        dest: 'build/js/new-catalog-seo-script.js'
      },
      basketDelivery: {
        src: 'build/js/basket-delivery-page-script.js',
        dest: 'build/js/basket-delivery-page-script.js'
      },
    },
    concat: {
      mainPage: {
        src: [
          // 'src/js/main-page/loading.js',
          'src/js/main-page/href-checker.js',
          'src/js/main-page/laximoGetter.js'
        ],
        dest: 'build/js/main-page-script.js'
      },
      anyAutosPage: {
        src: 'src/js/any-autos-page/vinAutoInfoGetter.js',
        dest: 'build/js/any-autos-page-script.js'
      },
      autosPage: {
        src: [
          'src/js/autos-page/cars.js',
          'src/js/autos-page/carsTO.js',
          'src/js/autos-page/tecDocUrlGetter.js',
          'src/js/autos-page/tecDocUrlController.js'
          ],
        dest: 'build/js/autos-page-script.js'
      },
      delivery: {
        src: [
          'src/js/delivery/deliveryGetter.js',
          'src/js/delivery/delivery--autocomplete.js'
        ],
        dest: 'build/js/delivery-page-script.js'
      },
      carTypeChooserModalWindow: {
        src: 'src/js/car-type-chooser-modal-window/script.js',
        dest: 'build/js/car-type-chooser-modal-window-script.js'
      },
      productCard: {
        src: 'src/js/product-card/script.js',
        dest: 'build/js/product-card-script.js'
      },
      trackers : {
        src: 'src/js/trackers/trackers.js',
        dest: 'build/js/trackers-script.js'
      },
      partsSoft: {
        src: 'src/js/parts-soft/parts-soft.js',
        dest: 'build/js/parts-soft-script.js'
      },
      seoCatalogOld: {
        src: 'src/js/catalog-seo/catalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      },
      seoCatalog: {
        src: 'src/js/test/NEWcatalog-seo-script.js',
        dest: 'build/js/new-catalog-seo-script.js'
      },
      basketDelivery: {
        src: [
          'src/js/delivery-pickup/delivery-pickup.js',
          'src/js/delivery-selfExport/delivery-selfExport.js',
          'src/js/shiptor-points-getter/shiptor-points-getter.js',
          'src/js/basket-delivery/basket-delivery.js',
        ],
        dest: 'build/js/basket-delivery-page-script.js'
      },
    }
  };
  const config = {
    sass: {
      options: {
        'no-source-map' : ''
      },
      target: {
        files: {}
      }
    },
    cssmin: {
      target: {
        files: {}
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 11']
      },
      target: {
        files: {}
      },
    },
    uglify: {
      target: {
        files: {}
      }
    },
    "babel": {
      options: {
        // sourceMap: true
      },
      target: {
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      target: {
      },
    },
    imagemin: {
      // static: {
      //   options: {
      //     optimizationLevel: 7,
      //     svgoPlugins: [{removeViewBox: false}],
      //     use: [imageminJpegtran(), imageminOptipng(), imageminSvgo(), imageminGifsicle()]
      //   },
      //   files: {
      //     // 'build/img/skills-slider/hh-logo.png': 'src/img/skills-slider/hh-logo.png',
      //     // 'dist/img.jpg': 'src/img.jpg',
      //     // 'dist/img.gif': 'src/img.gif'
      //     // 'build/img/one-image/Превью_БИГ1.jpg': 'src/img/one-image/Превью_БИГ1.jpg'
      //     // 'build/img/design/no-image.jpg': 'build/img/design/no-image.jpg'
      //   }
      // },
      dynamic: {
        options: {
          optimizationLevel: 9,
          svgoPlugins: [{removeViewBox: false}],
          use: [imageminJpegtran(), imageminOptipng(), imageminSvgo(), imageminGifsicle()]
        },
        files: [{
          expand: true,
          cwd: 'build/img/',
          // src: ['*.{png,jpg,svg,gif}', "*/*.{png,jpg,svg,gif}", "*/*/*.{png,jpg,svg,gif}"],
          // src: ["another-images/car-type-chooser-modal-window/*"],
          src: ["banners/*.jpg"],
          dest: 'build/img/banner-new/'
        }]
      }
    },
    tinypng: {
      options: {
        apiKey: '2ka0tTuSH4YYWaTztUMVQi6VAmuFURLO',
        // showProgress: true,gem install sass
        summarize: true
      },
      your_target: {
        expand: true,
        cwd: 'build/img/',
        // src: ["*/*/*.{png,jpg}"], // '*.{png,jpg}', , "*/*.{png,jpg}"
        src: ["another-images/car-type-chooser-modal-window/*"],
        dest: 'build/img/'
      },
    }
  };

  /**
   *
   * @param tasks {Array<String>}
   * @param presetName {String}
   */
  const createPaths = (tasks, presetName) => {
    tasks.forEach(task => {
      if (task === 'concat' || 'babel')
        config[task].target = paths[task][presetName];
      else
        config[task].target.files = paths[task][presetName];

    });
  };
  /**
   * @param tasks {Array<String>}
   * @param preset {String}
   * @returns {Array}
   */
  const initTasks = (tasks, preset) => {
    createPaths(tasks, preset);
    grunt.initConfig(config);
    return tasks;
  };

  require("load-grunt-tasks")(grunt);

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-tinypng');
  grunt.loadNpmTasks('grunt-contrib-sass');



  grunt.registerTask("default", ["babel"]);
  grunt.registerTask('scss', initTasks(SCSS_SETTINGS.tasks, SCSS_SETTINGS.preset));
  grunt.registerTask('js', initTasks(JS_SETTINGS.tasks, JS_SETTINGS.preset));
};