module.exports = {
    build: [
        'clean',
        'sass',
        'assemble'
    ],
    test: [
        'lint'
    ],
    lint: [
        'sasslint'
    ],
    deploy: [
        'clean',
        'sass',
        'assemble',
        'inlinecss'
    ],
    default: 'deploy'
};
