module.exports = function(grunt) {

    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                    'css/style.main.css': 'sass/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass']
            }
        },

        cssmin: {
            target: {
                files: {
                    'css/style.main.min.css': ['css/style.main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch', 'cssmin']);

};