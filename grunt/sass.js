module.exports = {
    options: {
        outputStyle: 'compressed',
        sourceMap: true
    },

    deploy: {
        expand: true,
        cwd: 'src/sass',
        src: '**/*.scss',
        dest: 'dist/public/css',
        ext: '.css',
        extDot: 'last'
    }
};
