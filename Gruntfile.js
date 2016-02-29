
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        browserify: {
            options: {
               transform: [['babelify', {presets: ['es2015', 'react']}]]
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/<%= pkg.name %>.<%= pkg.js.version %>.min.js' : ['dist/js/*.js']
                }
            }
        },
		watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['js']
            }
		}
    });

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['js']);
    grunt.registerTask('js', ['browserify']);
}