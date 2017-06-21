module.exports = {
    main: {
        options: {
            partials: ['src/templates/partials/**/*.hbs', 'src/templates/images/**/*.hbs']
        },
        expand: true,
        cwd: 'src/templates',
        src: [
            '*.hbs'
        ],
        dest: 'dist'
    }
};
