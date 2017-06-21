module.exports = {
    options: {
      livereload: true
    },
    assemble: {
        files: ['src/templates/**/*.hbs'],
        tasks: ['assemble', 'notify:assemble']
    },
    sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass', 'notify:sass']
    }
};
