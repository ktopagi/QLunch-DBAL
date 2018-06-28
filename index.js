'use sctrict';

const Hapi = require('hapi');

const usersController = require('./controllers/usersController');
const itemsController = require('./controllers/itemsController');

var server = Hapi.server({
    host : '0.0.0.0',
    port : 3005,
    debug: { 
        request: ['error']
    }
});

// server.route({
//     path: '/auth',
//     method: 'GET'
// })

server.route({
    method: 'GET',
    path: '/',
    options: {
        log: {
            collect: true
        }
    },
    handler: function(req, h){
        return '<center><h1>This is DBAL</h1></center>';
    }
});

server.route({
    method: 'POST',
    path: '/api/users/create',
    options: {
        log: {
            collect: true
        }
    },
    handler: usersController.createUser
});
server.route({
    method: "POST",
    path: "/api/users/login",
    options: {
        log: {
            collect: true
        }
    },
    handler: usersController.loginUser
});
server.route({
    method: "POST",
    path: "/api/items/create",
    options: {
        log: {
            collect: true
        }
    },
    handler: itemsController.createItem
});
server.route({
    method: "GET",
    path: "/api/items",
    options: {
        log: {
            collect: true
        }
    },
    handler: itemsController.getItem
});
server.route({
    method: "PUT",
    path: "/api/items/{id}",
    options: {
        log: {
            collect: true
        }
    },
    handler: itemsController.updateItem
});
server.route({
    method: "DELETE",
    path: "/api/items/{id}",
    options: {
        log: {
            collect: true
        }
    },
    handler: itemsController.deleteItem
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