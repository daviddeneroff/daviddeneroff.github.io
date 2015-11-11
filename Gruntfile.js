module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded',
					sourceMap: true
				},
				files: {
					'css/main.css': 'css/main.scss'
				}
			}
		},

		watch: {
		  compile: {
	        files: ['css/*.scss', 'css/partials/*.scss'],
	        tasks: ['sass:dev']
	      },
	      livereload: {
	      options: { livereload: true },
	        files: ['css/main.css'],
	      }
		},

    requirejs: {
      compile: {
        options: {
          almond: true,
          wrap: {
                start: ";(function() {",
                end: "}());"
          },
          preserveLicenseComments: false,
          baseUrl: "js/app",
          name: "../lib/almond",
          include: [
            "main",
            "router",
            "pages/index"
          ],
          mainConfigFile: "js/app/main.js",
          out: "build/main.js"
        }
      }
    },

		shell: {
			server: {
				command: 'killall php; php -S localhost:3000',
				options: {
					async: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell-spawn');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['shell:server', 'watch']);
  grunt.registerTask('build', ['requirejs']);	
};