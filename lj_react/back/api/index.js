const express = require('express');
const router = express.Router();

const USERNAME = 'dlwnssla';
const PASSWORD = 'pass1234';

const middleware = (req, res, next) => {
	const { query: { name } } = req;
	console.log(name);
	if (name === 'test123') {
		res.status(200).send('그 사용자는 이용할 수 없습니다');
	} else {
		next();
	}
};

router.post('/login', (req, res) => {
	const { body: { username, password } } = req;
	if (USERNAME === username && PASSWORD === password) {
		res.status(200).send(true);
	} else {
		res.status(200).send(false);
	}
});

router.get('/getName', middleware, (req, res) => {
	const { query: { name } } = req;
	res.send(`<h1>Bye, ${name}!</h1>`);
});

router.post('/user/sigin', (req, res) => {
	console.log('dd');
	const { body: { username, password } } = req;
	console.log(username);
	if (USERNAME === username && PASSWORD === password) {
		res.status(200).send({
			user: {
				name: '이준',
				username,
			},
			token: 'abcd'
		});
	} else {
		res.status(200).send(false);
	}
})

module.exports = router;