import Hapi from '@hapi/hapi';

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: async (req, h) => {
        return 'Hello from Hapi!';
    }, 
});

server.start()
    .then(() => console.log("Hapi server is lisening on port 3000"));