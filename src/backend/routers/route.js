const express = require('express');


module.exports = function(server) {

    // api routers
    const router = express.Router();
    server.use('/api', router);

    //todo route
    const todoService = require('./../api/todo/todoService');
    todoService.register(router, '/todos');
}