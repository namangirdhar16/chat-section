const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.port || 8000;
const app = express();
const cors = require('cors');
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
const router = require('./router');

app.use(router);
//app.use(cors());

io.on('connection',(socket)=> {

    console.log('a new user has joined!!');
    
    socket.on('join',({ name , room },callback) => {
        console.log(name , room);
        
        callback({err:'there is error'})
    })
    socket.on('disconnect',() => {
        console.log('user has disconnected!!');
    })
})



server.listen(PORT, ()=> {
    console.log(`server is up and running on port ${PORT}`);
})