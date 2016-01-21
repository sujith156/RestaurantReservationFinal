module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //individual plugin configs
        cssmin: {
            css: {
                files: {
                    'dist/min/app.style.min.css': ['css/myStyle.css', 'css/tilesStyle.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 version', 'ie 8', 'ie 9']
            },
            files: {
                src: 'dist/min/app.style.min.css',
                dest: 'dist/min/app.style.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/min/app.script.min.js': ['app/angular.js','app/angular-mocks.js','app/app.js','app/**/*.controller.js', 'app/**/*.service.js','app/**/*.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'vendor/',
                        src: ['fonts/**'],
                        dest: 'dist'
                    }
                ]
            }
        },
        watch: {
            css: {
                files: ['css/myStyle.css','css/tilesStyle.css'],
                tasks: ['cssmin', 'autoprefixer']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['uglify']
            }
        },
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    browsers: ['PhantomJS'],
                    logLevel: 'INFO',
                    singleRun: true,
                    reporters: ['spec'],
                    files: [
                        'vendor/js/angular.js',
                        'vendor/js/angular-route.js',
                        'vendor/js/angular-mocks.js',
                        'app/**/*.js',
                        'tests/**/*.js'
                    ]
                }
            }
        }
    });

    //load tasks using grunt.loadNpmTasks()
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-autoprefixer');

    //register custom tasks using grunt.registerTask()
    grunt.registerTask('default', ['cssmin', 'autoprefixer', 'uglify', 'copy']);
};