// DB관련 내용 
const mysql = require('mysql');
require('dotenv').config();

const { env: { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } } = process;

let conn, sql = '';

const info = {
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_DATABASE
};

const handleDisconnect = () => {
	conn = mysql.createConnection(info);
	conn.connect((err) => {
		if (err) {
			console.log('err message : ' + err);
			setTimeout(handleDisconnect, 2000);
		}
	});

	conn.on('error', (err) => {
		console.log('DB ERROR : ' + err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
};

handleDisconnect();

module.exports.postShop = (req, res) => {
	console.log(req.body);
	const { body: { shop_price, shop_name, shop_src, shop_id } } = req;
	sql = `
		INSERT INTO shop(shop_price, shop_name, shop_src, shop_id)
		VALUES(?, ?, ?, ?);
	`;
	conn.query(sql, [shop_price, shop_name, shop_src, shop_id], (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			res.send(true)
		}
	});
};

module.exports.getShop = (req, res) => {
	sql = `
		SELECT * FROM shop
	`;
	conn.query(sql, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
		console.log(data)
	});
};