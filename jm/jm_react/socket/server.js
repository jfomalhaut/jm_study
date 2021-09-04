const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors')

const app = express();
const server = http.createServer(app);
const io = socket(server, {
    cors: {
        origin: ['http://localhost:3000'],
        credentials: true,
    }
});

app.use(express.static('public'));
app.use('/io', express.static('node_modules'));
app.use('/js', express.static('js'));

const PORT = 80;

io.on('connection', (socket)=>{

    socket.on('newUser', ({ nickname})=>{
        socket.name = nickname;
        const payload = {
            type: 'connect',
            nickname
        };
        io.sockets.emit('update', { nickname: socket.name, type: 'disconnect'});
    });

    socket.on('message', ({ nickname, type, msg}) => {
        console.log(msg);
        io.sockets.emit('update', { nickname, type, msg})
    });

    socket.on('disconnect', ()=>{
        socket.broadcast.emit('update', {nickname: socket.name, type:'disconnect'})
    })

});

server.listen(PORT, ()=>{
    console.log('Start Socket Server, Port Number :' + PORT); 
})