const express = require('express');
const cors = require('cors');
const path = require('path');
const api = require('./api');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(cors({
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	origin: [
		'http://localhost:3000',
		'http://localhost'
	]
}));

app.all((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.use('/api', api);
app.use('/files', express.static(path.join(__dirname, './files')));

app.listen(PORT, () => {
	console.log('Start Diary Server, Port Number : ' + PORT);
})