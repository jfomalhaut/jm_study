// Server에서 이뤄지는 작업

const express = require('express');
const http = require('http');
const cors = require('cors');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server, {
	cors: {
		origin: ['http://localhost:3000'],
		credentials: true,
	}
});
const PORT = process.env.PORT || 80;

app.use(express.static('public'));
app.use('/io', express.static('node_modules'));
app.use('/js', express.static('js'));

io.on('connection', (socket) => {
	
	// event 종류에 따른 대응
	// 새로운 유저가 들어왔을 때
	socket.on('newUser', ({ nickname }) => {
		socket.name = nickname;
		const payload = {
			type: 'connect',
			nickname
		};
		io.sockets.emit('newUser', payload);
	});


	// 누군가가 메시지를 썼을 때
	socket.on('message', ({ nickname, type, msg }) => {
		io.sockets.emit('message', { nickname, type, msg });
	});


	// 특정 유저가 연결이 끊어졌을 때
	socket.on('disconnect', () => {
		socket.broadcast.emit('update', { nickname: socket.name, type: 'disconnect' })
	});


});

server.listen(PORT, () => {
	console.log('Start Socket Server, Port Number : ' + PORT);
});