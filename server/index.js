const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.port || 8000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

app.use(router);

io.on('connection',(socket)=> {

    console.log('a new user has joined!!');
    
    io.on('disconnect',() => {
        console.log('user has disconnected!!');
    })
})



server.listen(PORT, ()=> {
    console.log(`server is up and running on port ${PORT}`);
})