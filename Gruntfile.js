/**
 * @file
 */
var sass = require('node-sass');

module.exports = function(grunt) {

  // This is where we configure each task that we'd like to run.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      // This is where we set up all the tasks we'd like grunt to watch for changes.
      scripts: {
        files: ['js/source/{,*/}*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      },
      images: {
        files: ['images/source/{,*/}*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false
        }
      },
      vector: {
        files: ['images/source/{,*/}*.svg'],
        tasks: ['svgmin'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['scss/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'cmq', 'autoprefixer']
      }
    },
    uglify: {
      // This is for minifying all of our scripts.
      options: {
        sourceMap: true,
        mangle: false
      },
      my_target: {
        files: [{
          expand: true,
          cwd: 'js/source',
          src: '{,*/}*.js',
          dest: 'js/build'
        }]
      }
    },
    imagemin: {
      // This will optimize all of our images for the web.
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/source/',
          src: ['{,*/}*.{png,jpg,gif}' ],
          dest: 'images/optimized/'
        }]
      }
    },
    svgmin: {
      options: {
        plugins: [{
          removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'images/source/',
          src: ['{,*/}*.svg' ],
          dest: 'images/optimized/'
        }]
      }
    },
    autoprefixer:{
      options: {
        map: true,
        browsers: ['last 2 versions', '> 5% in DE']
      },
      dist:{
        files:{
          'css/style/style.css':'css/style/style.css'
        }
      }
    },
    cmq: {
      options: {
        log: false
      },
      dist: {
        files: {
          'css/style/style.css':'css/style/style.css'
        }
      }
    },
    sass: {
      // This will compile all of our sass files
      // Additional configuration options can be found at https://github.com/sindresorhus/grunt-sass
      options: {
        implementation: sass,
        sourceMap: false,
        // This controls the compiled css and can be changed to nested, compact or compressed.
        outputStyle: 'expanded',
        precision: 5
      },
      dist: {
        files: {
          //'css/base/base.css': 'scss/base/base.scss',
          //'css/components/components.css': 'scss/components/components.scss',
          'css/components/tabs.css': 'scss/components/tabs.scss',
          'css/components/messages.css': 'scss/components/messages.scss',
          //'css/layout/layout.css': 'scss/layout/layout.scss',
          //'css/theme/theme.css': 'scss/theme/theme.scss',
          //'css/theme/print.css': 'scss/theme/print.scss'
          'css/style/style.css': 'scss/style/style.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/{,*/}*.css',
            'templates/{,*/}*.twig',
            'images/optimized/{,*/}*.{png,jpg,gif,svg}',
            'js/build/{,*/}*.js',
            '*.theme'
          ]
        },
        options: {
          watchTask: true,
          // Change this to "true" if you'd like the css to be injected rather than a browser refresh. In order for this to work with Drupal you will need to install https://drupal.org/project/link_css keep in mind though that this should not be run on a production site.
          injectChanges: false
        }
      }
    }
  });
  // This is where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  // Now that we've loaded the package.json and the node_modules we set the base path
  // for the actual execution of the tasks
  // grunt.file.setBase('/')
  // This is where we tell Grunt what to do when we type "grunt" into the terminal.
  // Note: if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
  // you can type 'grunt watch' to automatically track your files for changes.
  grunt.registerTask('default', ['browserSync','uglify', 'imagemin', 'svgmin', 'sass', 'watch']);
};
