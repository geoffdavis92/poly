module.exports = function(grunt) {

   grunt.initConfig({
      watch: {
         all: {
            files: ['**/*.html','**/css/*.css','**/js/*.js','**/js/*.json','**/*.svg','Gruntfile.js'],
            options: { livereload: 10001 }
         },
         sass: {
            files: 'css/sass/*.sass',
            tasks: ['sass:format','autoprefixer']
         }     
      },
      sass: {
         format: {
            files: [{
               'css/main.css':'css/sass/main.sass'
            }],
            options: {
               lineNumbers: false, // Project line numbers from SASS file
               // style: 'compressed',
               trace: true,
               update: true
            },
            tasks: 'sass:compress'
         },
         compress: {
            files: {
               'dist/css/main.min.css':'css/main.css'
            },
            options: {
               lineNumbers: false,
               style: 'compressed',
               trace: false
            }
         }
      },
      autoprefixer: {
         options: {
            cascade: false
         },
         sass: {
            src: 'css/main.css',
            dest: 'css/main.css'
         }
      },
      uglify: {
         options: {
            mangle: false
         },
         target: {
            files: {
               'dist/js/script.min.js':['js/script.js'],
               'dist/lib/js/namely.min.js':['js/api.js']
            }
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   // grunt.loadNpmTasks('grunt-webpack');
   

   grunt.registerTask('default', ['watch','sass','autoprefixer']);
   grunt.registerTask('build', ['uglify','sass:compress'])

}