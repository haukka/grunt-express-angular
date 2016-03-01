module.exports = function(grunt) {

  grunt.initConfig({

      ngAnnotate: {
	  options: {
	      singleQuotes: true
	  },
	  app: {
	      files: {
		  'client/min-safe/controllers.js': ['client/controllers.js'],
		  'client/min-safe/app.js': ['client/app.js']
	      }
	  }
      },

      concat: {
	  js: {
	      src: ['client/min-safe/**/*.js'],
	      dest: 'client/min/app.min.js'
	  }
      },

      uglify: {
	  js: {
              src: ['client/min/app.min.js'],
              dest: 'client/min/app.min.js'
	  }
      },

    cssmin: {
      build: {
        files: {
          'client/stylesheets/style.min.css': 'client/stylesheets/style.css'
        }
      }
    },

      watch: {
	  css: {
        files: ['client/stylesheets/**/*.css'],
        tasks: ['cssmin']
      }
    },

    nodemon: {
      dev: {
        script: 'server/bin/www'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   

  });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['cssmin', 'ngAnnotate','concat', 'uglify', 'concurrent']);

};
