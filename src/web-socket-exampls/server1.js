import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import {colorfulLog} from 'colorful-log-chvyk';

colorfulLog('Hiii!');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    colorfulLog(`Connected to: ${socket.client.id}`);

    // socket.on('newNumber', data => {
    //     colorfulLog(data);
    //     // socket.emit('someOtherEvent', { message: 'hello!' });
    // });

    socket.on('message', (data) => {
        colorfulLog(data);
    });

    socket.on('disconnect', () => {
        colorfulLog(`Disconnected from: ${socket.client.id}`);
    });
});


server.listen(8000, () => {
    colorfulLog('Waiting for connections on port 8000');
});