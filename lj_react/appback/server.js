const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
	credentials: true,
	method: ['GET', 'POST', 'PUT', 'DELETE'],
	origin: '*'
}));

app.get('/test', (req, res) => {
	res.send('hello');
});

app.get('/getData', (req, res) => {
	res.send([
		{id: 1, name: '사과', price: 1000 },
		{id: 2, name: '귤', price: 2000 },
		{id: 3, name: '포도', price: 3000 },
		{id: 4, name: '복숭아', price: 4000 },
	]);
});

app.listen(8080, () => {
	console.log('App Server, 8080');
});