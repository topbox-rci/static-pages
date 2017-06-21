var express = require('express');

var server = {

    app: express(),

    initialize: function() {
        server.urlConfs();
        server.startWebServer();
    },

    startWebServer: function() {
        server.app.listen(8000);
        console.log('Listening on port 8000');
    },

    //---------------------------------------------------------------------------------------------
    // URL CONFS
    //---------------------------------------------------------------------------------------------
    urlConfs: function() {
        server.app.use(express.static(__dirname + '/dist'));
    }
};

server.initialize();
