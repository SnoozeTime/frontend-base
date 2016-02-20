module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // uglify to make js ugly hell yay
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/main.js',
        dest: 'js/build/main.min.js'
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'js/main.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    sass: {
      dist: {
        files: {
          'css/main.css': 'css/main.scss'
        }
      }
    },

    watch: {
    			css: {
    				files: '**/*.scss',
    				tasks: ['sass', 'cssmin']
    			}
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    }
  });

  // Loqd the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Default task(s)
  grunt.registerTask('default', ['sass', 'cssmin', 'jshint', 'uglify']);
  grunt.registerTask('grunt', ['watch']);
};
