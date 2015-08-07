module.exports = function(grunt) {

   grunt.initConfig({
      watch: {
         all: {
            files: ['**/*.html','**/css/*.css','**/js/*.js','**/js/*.json','**/*.svg','Gruntfile.js'],
            options: { livereload: true }
         },
         sass: {
            files: 'css/sass/*.sass',
            tasks: ['sass:format','autoprefixer','sass:compress']
         },
         scripts: {
            files: ['js/script.js','js/src/api.js'],
            tasks: ['uglify']
         }     
      },
      sass: {
         format: {
            files: [{
               'css/style.css':'css/sass/style.sass'
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
               'app/css/style.min.css':'css/style.css'
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
            src: 'css/style.css',
            dest: 'css/style.css'
         }
      },
      import: {
         options: {},
         dist: {
            src: 'js/src/api.js',
            dest: 'app/lib/js/namely.js'
         }
      },
      uglify: {
         options: {
            mangle: false
         },
         target: {
            files: {
               'app/js/script.min.js':['js/script.js'],
               'app/lib/js/namely.min.js':['js/api.js']
            }
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-import');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   // grunt.loadNpmTasks('grunt-webpack');
   

   grunt.registerTask('default', ['watch','sass','autoprefixer']);
   grunt.registerTask('build', ['uglify','sass:compress'])

}

// Unused stuff

// BabelJS

   // babel: {
   //       dist: {
   //          files: {
   //             "js/src/namely-api.js":"js/es6/api/api.js",
   //             "js/src/oath.js":"js/es6/_oath.js",
   //             "js/src/profile.js":"js/es6/_profile.js"
   //          }
   //       }
   //    },


// RequireJS

// baseUrl:"/",
//             mainConfigFile: "js/src/namely-api.js",
//             paths: {
//                "OAuTH": "js/src/_oath.js",
//                "Profile": "js/src/_profile.js"
//             },
//             locale: "en-us",
//             optimize: "none" /*Use uglify for prod*/