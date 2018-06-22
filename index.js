'use sctrict';

const Hapi = require('hapi');
const Joi = require('joi');

const usersController = require('./controllers/usersController');
const itemsController = require('./controllers/itemsController');

var server = Hapi.server({
    host : 'localhost',
    port : 3005
});

// server.route({
//     path: '/auth',
//     method: 'GET'
// })

server.route({
    method: 'GET',
    path: '/',
    handler: function(req, h){
        return '<center><h1>This is DBAL</h1></center>';
    }
});

server.route({
    method: 'POST',
    path: '/api/users/create',
    handler: usersController.createUser
});
server.route({
    method: "POST",
    path: "/api/users/login",
    handler: usersController.loginUser
});
server.route({
    method: "GET",
    path: "/api/items",
    handler: itemsController.getItem
});
server.route({
    method: "POST",
    path: "/api/items/create",
    handler: itemsController.createItem
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();