module.exports = function(grunt) {

  const imagemin = require('imagemin');
  const imageminJpegtran = require('imagemin-jpegtran');
  const imageminGifsicle = require('imagemin-gifsicle');
  const imageminOptipng = require('imagemin-optipng');
  const imageminSvgo = require('imagemin-svgo');

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          'no-source-map' : ''
        },
        files: {
          'build/css/users-styles.css': 'src/less/style.scss'
          // 'build/css/lax-tecDoc-pages/style.css' : 'src/css/lax-tecDoc-pages/style.scss'
          // 'build/css/delivery/delivery--style.css' : 'src/css/delivery/delivery--style.scss'
          // 'build/css/catalog-seo/catalog-seo-style.css' : 'src/css/catalog-seo/catalog-seo-style.scss'
        }
      }
    },
    // less: {
    //   style: {
    //     files: {
    //       'build/css/users-styles.css': 'src/less/style.less'
    //       // 'build/css/lax-tecDoc-pages/style.css' : 'src/css/lax-tecDoc-pages/style.less'
    //       // 'build/css/delivery/delivery--style.css' : 'src/css/delivery/delivery--style.less'
    //       'build/css/catalog-seo/catalog-seo-style.css' : 'src/css/catalog-seo/catalog-seo-style.less'
    //     }
    //   }
    // },
    cssmin: {
      target: {
        files: {
          'build/css/users-styles.css': 'build/css/users-styles.css'
          // 'build/css/lax-tecDoc-pages/style.css' : 'build/css/lax-tecDoc-pages/style.css'
          // 'build/css/delivery/delivery--style.css' : 'build/css/delivery/delivery--style.css'
          // 'build/css/catalog-seo/catalog-seo-style.css' : 'build/css/catalog-seo/catalog-seo-style.css'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 11']
      },
      target: {
        files: {
          'build/css/users-styles.css': 'build/css/users-styles.css'
          // 'build/css/lax-tecDoc-pages/style.css' : 'build/css/lax-tecDoc-pages/style.css'
          // 'build/css/delivery/delivery--style.css' : 'build/css/delivery/delivery--style.css'
          // 'build/css/catalog-seo/catalog-seo-style.css' : 'build/css/catalog-seo/catalog-seo-style.css'
        }
      },
    },
    uglify: {
      // mainPage: {
      //   src: 'build/js/main-page-script.js',
      //   dest: 'build/js/main-page-script.js'
      // },
      // anyAutosPage: {
      //   src: 'build/js/any-autos-page-script.js',
      //   dest: 'build/js/any-autos-page-script.js'
      // },
      // autosPage : {
      //   src: 'build/js/autos-page-script.js',
      //   dest: 'build/js/autos-page-script.js'
      // },
      // delivery: {
      //   src: 'build/js/delivery-page-script.js',
      //   dest: 'build/js/delivery-page-script.js'
      // },
      // carTypeChooserModalWindow: {
      //   src:  'build/js/car-type-chooser-modal-window-script.js',
      //   dest: 'build/js/car-type-chooser-modal-window-script.js'
      // },
      // productCard: {
      //   src: 'build/js/product-card-script.js',
      //   dest: 'build/js/product-card-script.js'
      // },
      // trackers: {
      //   src: 'build/js/trackers-script.js',
      //   dest: 'build/js/trackers-script.js'
      // },
      // partsSoft: {
      //   src: 'build/js/parts-soft-script.js',
      //   dest: 'build/js/parts-soft-script.js'
      // },
      seoCatalog: {
        src: 'build/js/catalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      }
    },
    "babel": {
      options: {
        // sourceMap: true
      },
      dist: {
        files: {
          // "build/js/main-page-script.js" : "build/js/main-page-script.js",
          // "build/js/any-autos-page-script.js": "build/js/any-autos-page-script.js",
          // "build/js/autos-page-script.js": "build/js/autos-page-script.js",
          // 'build/js/delivery-page-script.js' : 'build/js/delivery-page-script.js',
          // 'build/js/car-type-chooser-modal-window-script.js' : 'build/js/car-type-chooser-modal-window-script.js',
          // 'build/js/product-card-script.js' : 'build/js/product-card-script.js',
          // 'build/js/trackers-script.js' : 'build/js/trackers-script.js',
          // 'build/js/parts-soft-script.js' : 'build/js/parts-soft-script.js',
          'build/js/catalog-seo-script.js' : 'build/js/catalog-seo-script.js'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      // mainPage: {
      //   src: [
      //     // 'src/js/main-page/loading.js',
      //     'src/js/main-page/href-checker.js',
      //     'src/js/main-page/laximoGetter.js'
      //     ],
      //   dest: 'build/js/main-page-script.js'
      // },
      // anyAutosPage: {
      //   src: 'src/js/any-autos-page/vinAutoInfoGetter.js',
      //   dest: 'build/js/any-autos-page-script.js'
      // },
      // autosPage: {
      //   src: [
      //     'src/js/autos-page/cars.js',
      //     'src/js/autos-page/carsTO.js',
      //     'src/js/autos-page/tecDocUrlGetter.js',
      //     'src/js/autos-page/tecDocUrlController.js'
      //     ],
      //   dest: 'build/js/autos-page-script.js'
      // },
      // delivery: {
      //   src: [
      //     'src/js/delivery/deliveryGetter.js',
      //     'src/js/delivery/delivery--autocomplete.js'
      //   ],
      //   dest: 'build/js/delivery-page-script.js'
      // },
      // carTypeChooserModalWindow: {
      //   src: 'src/js/car-type-chooser-modal-window/script.js',
      //   dest: 'build/js/car-type-chooser-modal-window-script.js'
      // },
      // productCard: {
      //   src: 'src/js/product-card/script.js',
      //   dest: 'build/js/product-card-script.js'
      // },
      // trackers : {
      //   src: 'src/js/trackers/trackers.js',
      //   dest: 'build/js/trackers-script.js'
      // },
      // partsSoft: {
      //   src: 'src/js/parts-soft/parts-soft.js',
      //   dest: 'build/js/parts-soft-script.js'
      // },
      seoCatalog: {
        src: 'src/js/catalog-seo/catalog-seo-script.js',
        dest: 'build/js/catalog-seo-script.js'
      }
    },
    imagemin: {
      static: {
        options: {
          optimizationLevel: 7,
          svgoPlugins: [{removeViewBox: false}],
          use: [imageminJpegtran(), imageminOptipng(), imageminSvgo(), imageminGifsicle()]
        },
        files: {
          // 'build/img/skills-slider/hh-logo.png': 'src/img/skills-slider/hh-logo.png',
          // 'dist/img.jpg': 'src/img.jpg',
          // 'dist/img.gif': 'src/img.gif'
          // 'build/img/one-image/Превью_БИГ1.jpg': 'src/img/one-image/Превью_БИГ1.jpg'
          'build/img/design/no-image.jpg': 'build/img/design/no-image.jpg'
        }
      },
      // dynamic: {
      //     options: {
      //       optimizationLevel: 4,
      //       svgoPlugins: [{removeViewBox: false}],
      //       use: [imageminJpegtran(), imageminOptipng(), imageminSvgo(), imageminGifsicle()]
      //     },
      //   files: [{
      //     expand: true,
      //     cwd: 'src/img/',
      //     // src: ['*.{png,jpg,svg,gif}', "*/*.{png,jpg,svg,gif}", "*/*/*.{png,jpg,svg,gif}"],
      //     src: ["another-images/car-type-chooser-modal-window/*"],
      //     dest: 'build/img/'
      //   }]
      // }
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
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-tinypng');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask("default", ["babel"]);
};