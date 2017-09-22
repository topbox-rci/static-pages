module.exports = {
    main: {
        options: {
            data: 'data/auth0.json',
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
