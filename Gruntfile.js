module.exports = function(grunt) {

grunt.initConfig({
  imagemin: {                          // Task
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'dist/'                  // Destination path prefix
      }]
    }
  },
  imageoptim: {
  myTask: {
    src: ['src/']
  }
}
});


grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-imageoptim');


grunt.registerTask('default', ['imagemin']);
grunt.registerTask('optim', ['imageoptim']);
};