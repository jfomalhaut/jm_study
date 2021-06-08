const express = require('express');
const cors = require('cors');
const api = require('./api');
const app = express();
const PORT = process.env.PORT || 80;

// POST의 body를 사용하기 위해서는 아래와 같이 작성해준다.
app.use(express.json());
app.use(cors({
	credentials: true,
	methods: ['GET', 'POST'],
	origin: [
		'http://localhost',
		'http://localhost:3000',
	]
}));

// app.use('/:name', (req, res) => {
// 	const { params: { name } } = req;
// 	res.send(`<h1>Hello, ${name}!</h1>`);
// });

app.use('/api', api);

app.listen(PORT, () => {
	console.log('Start Express Server. Port Number : ' + PORT);
});