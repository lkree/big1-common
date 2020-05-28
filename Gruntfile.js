module.exports = (grunt) => {

  const imagemin = require('imagemin');
  const imageminJpegtran = require('imagemin-jpegtran');
  const imageminGifsicle = require('imagemin-gifsicle');
  const imageminOptipng = require('imagemin-optipng');
  const imageminSvgo = require('imagemin-svgo');
  require("load-grunt-tasks")(grunt);

  const paths = {
    sass: {
      'users-styles': {
        'build/css/users-styles.css' : 'src/scss/style.scss',
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
      'originalCatalog': {
        'build/css/catalog-seo-style.css' : 'src/scss/another-components/original-catalog/index.scss',
      },
      'basket-delivery': {
        'build/css/basket-delivery.css' : 'src/scss/another-components/basket/index.scss',
      },
      'contacts': {
        'build/css/contacts.css' :'src/scss/another-components/contacts.scss',
      },
      'laximoVehicleByVin': {
        'build/css/laximoVehicleByVin.css' :'src/scss/another-components/laximoVehicleByVin.scss',
      },
      'laximoVehicles': {
        'build/css/laximoVehicles.css' :'src/scss/another-components/laximoVehicles.scss',
      },
      'customers': {
        'build/css/customers.css' :'src/scss/another-components/customers/index.scss',
      },
      'aboutCompany': {
         'build/css/clients/aboutCompany.css': 'src/scss/clients/aboutCompany.scss',
      }
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
      'originalCatalog': {
        'build/css/catalog-seo-style.css' : 'build/css/catalog-seo-style.css',
      },
      'basket-delivery': {
        'build/css/basket-delivery.css' : 'build/css/basket-delivery.css',
      },
      'contacts': {
        'build/css/contacts.css' : 'build/css/contacts.css',
      },
      'laximoVehicleByVin': {
        'build/css/laximoVehicleByVin.css': 'build/css/laximoVehicleByVin.css',
      },
      'laximoVehicles': {
        'build/css/laximoVehicles.css' :'build/css/laximoVehicles.css',
      },
      'customers': {
        'build/css/customers.css' :'build/css/customers.css',
      },
      'aboutCompany': {
        'build/css/clients/aboutCompany.css': 'build/css/clients/aboutCompany.css',
      }
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
      'originalCatalog': {
        'build/css/catalog-seo-style.css' : 'build/css/catalog-seo-style.css',
      },
      'basket-delivery': {
        'build/css/basket-delivery.css' : 'build/css/basket-delivery.css',
      },
      'contacts': {
        'build/css/contacts.css' : 'build/css/contacts.css',
      },
      'laximoVehicleByVin': {
        'build/css/laximoVehicleByVin.css': 'build/css/laximoVehicleByVin.css',
      },
      'laximoVehicles': {
        'build/css/laximoVehicles.css' :'build/css/laximoVehicles.css',
      },
      'customers': {
        'build/css/customers.css' :'build/css/customers.css',
      },
      'aboutCompany': {
        'build/css/clients/aboutCompany.css': 'build/css/clients/aboutCompany.css',
      }
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
      originalCatalog: {
        src: 'build/js/catalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      },
      basketDelivery: {
          src: 'build/js/basket-delivery-page-script.js',
          dest: 'build/js/basket-delivery-page-script.js'
      },
      customers: {
          src: 'build/js/customers-script.js',
          dest: 'build/js/customers-script.js'
      },
      citiesList: {
        src: 'build/js/cities-list.js',
        dest: 'build/js/cities-list.js'
      },
      shiptor: {
        src: 'build/js/shiptorPointsGetter.js',
        dest: 'build/js/shiptorPointsGetter.js'
      },
      orders: {
        src: 'build/js/orders-auto-order.js',
        dest: 'build/js/orders-auto-order.js'
      },
      laximoVehicleByVin: {
        src: 'build/js/laximoVehiclesByVinFrame.js',
        dest: 'build/js/laximoVehiclesByVinFrame.js'
      },
      laximoVehicles: {
        src: 'build/js/laximoVehicles.js',
        dest: 'build/js/laximoVehicles.js'
      },
      customersDashboard: {
        src: 'build/js/customersDashboard.js',
        dest: 'build/js/customersDashboard.js'
      },
      aboutCompany: {
        src: 'build/js/aboutCompany.html.js',
        dest: 'build/js/aboutCompany.html.js'
      }
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
      originalCatalog: {
        src: 'build/js/catalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      },
      basketDelivery: {
        src: 'build/js/basket-delivery-page-script.js',
        dest: 'build/js/basket-delivery-page-script.js'
      },
      customers: {
        src: 'build/js/customers-script.js',
        dest: 'build/js/customers-script.js'
      },
      citiesList: {
        src: 'build/js/cities-list.js',
        dest: 'build/js/cities-list.js'
      },
      shiptor: {
        src: 'build/js/shiptorPointsGetter.js',
        dest: 'build/js/shiptorPointsGetter.js'
      },
      orders: {
        src: 'build/js/orders-auto-order.js',
        dest: 'build/js/orders-auto-order.js'
      },
      laximoVehicleByVin: {
        src: 'build/js/laximoVehiclesByVinFrame.js',
        dest: 'build/js/laximoVehiclesByVinFrame.js'
      },
      laximoVehicles: {
        src: 'build/js/laximoVehicles.js',
        dest: 'build/js/laximoVehicles.js'
      },
      customersDashboard: {
        src: 'build/js/customersDashboard.js',
        dest: 'build/js/customersDashboard.js'
      },
      aboutCompany: {
        src: 'build/js/aboutCompany.html.js',
        dest: 'build/js/aboutCompany.html.js'
      }
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
      originalCatalog: {
        src: 'src/js/test/NEWcatalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      },
      basketDelivery: {
        src: [
          'src/js/data/cities-list-data.js',
          'src/js/basket/basket-delivery/basket-main-script.js',
          'src/js/basket/shiptor-points-getter/shiptor-points-getter.js',
          'src/js/basket/delivery-pickup/delivery-pickup.js',
          'src/js/basket/delivery-selfExport/delivery-selfExport.js',
          'src/js/basket/basket-react/dist/main.js',
          // 'src/js/basket/basket-delivery/basket-delivery.js',
        ],
        dest: 'build/js/basket-delivery-page-script.js'
      },
      customers: {
        src: 'src/js/customers/solo-scripts//bitrix-registration-send.js',
        dest: 'build/js/customers-script.js'
      },
      citiesList: {
        src: 'src/js/data/cities-list-data.js',
        dest: 'build/js/cities-list.js'
      },
      shiptor: {
        src: 'src/js/basket/shiptor-points-getter/shiptor-points-getter.js',
        dest: 'build/js/shiptorPointsGetter.js'
      },
      orders: {
        src: 'src/js/orders/auto-order.js',
        dest: 'build/js/orders-auto-order.js'
      },
      laximoVehicleByVin: {
        src: 'build/js/laximoVehiclesByVinFrame.js',
        dest: 'build/js/laximoVehiclesByVinFrame.js'
      },
      laximoVehicles: {
        src: 'build/js/laximoVehicles.js',
        dest: 'build/js/laximoVehicles.js'
      },
      customersDashboard: {
        src: 'build/js/customersDashboard.js',
        dest: 'build/js/customersDashboard.js'
      },
      aboutCompany: {
        src: 'src/js/clients/aboutCompany.html.js',
        dest: 'build/js/aboutCompany.html.js'
      }
    }
  };
  const config = {
    sass: {
      // options: {
      //   'no-source-map' : ''
      // },
      options: {
        sourcemap : 'none'
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
        separator: ';\n',
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

  const SCSS_SETTINGS = {
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    type: 'css',
    preset: "aboutCompany",
  };
  const JS_SETTINGS = {
    tasks: ['concat', 'babel', 'uglify'],
    type: 'js',
    preset: 'aboutCompany',
  };

  /**
   * creates paths in GruntFile configs
   * wont work without this function
   * @param tasks {Array<String>}
   * @param preset {String}
   * @param type {'css' | 'js'}
   */
  const createPaths = (tasks, preset, type) => {
    tasks.forEach(task => {
      if (type === 'css')
        config[task].target.files = paths[task][preset];
      if (type === 'js')
        config[task].target = paths[task][preset];
    });
  };
  /**
   * @param tasks {Array<String>}
   * @param preset {String}
   * @param type {'css' | 'js'}
   * @returns {Array}
   */
  const initTasks = (tasks, preset, type) => {
    createPaths(tasks, preset, type);
    grunt.initConfig(config);
    return tasks;
  };

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-tinypng');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask("default", ["babel"]);
  grunt.registerTask('scss', initTasks(SCSS_SETTINGS.tasks, SCSS_SETTINGS.preset, SCSS_SETTINGS.type));
  grunt.registerTask('js', initTasks(JS_SETTINGS.tasks, JS_SETTINGS.preset, JS_SETTINGS.type));
};
