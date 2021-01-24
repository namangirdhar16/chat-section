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
const { addUser , removeUser , getUser , getUsersInRoom } = require('./users.js')

io.on('connection',(socket)=> {

   
    
    socket.on('join',({ name , room },callback) => {
        
        const { user , error} = addUser({ name , room , id:socket.id});
        if(error)
        return callback(error);
        socket.join(user.room);
        socket.emit('message',{user:'admin' , text:`Welcome ${user.name} to the room ${user.room} !`});
        socket.broadcast.to(user.room).emit('message',{ user:'admin' , text:`${user.name} has joined ${user.room} !`});
        
        callback();
        
    })

    socket.on('sendMessage',(message,callback)=>{
     const user = getUser(socket.id);
     io.to(user.room).emit('message',{user, text:message});
     callback();
    })
    
    socket.on('disconnect',() => {
        console.log('user has disconnected!!');
    })
})



server.listen(PORT, ()=> {
    console.log(`server is up and running on port ${PORT}`);
})