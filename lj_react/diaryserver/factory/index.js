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

module.exports.postDiary = (req, res) => {
	const { body: { writer, content, title, category_id } } = req;
	sql = `
		INSERT INTO diary(writer, category_id, title, content, view, create_datetime)
		VALUES(?, ?, ?, ?, 0, NOW());
	`;
	conn.query(sql, [writer, category_id, title, content], (err) => {
		if (err) {
			res.status(500).send(false);
		} else {
			res.status(200).send(true);
		}
	});
};

module.exports.getCategory = (req, res) => {
	sql = `
		SELECT c.category_id, c.category_name, IF(d.category_id, COUNT(d.category_id), 0) AS count
		FROM category c
		LEFT JOIN diary d ON d.category_id = c.category_id
		GROUP by c.category_id
		ORDER by c.category_id
	`;
	conn.query(sql, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};

// Post를 카테고리에 맞게 불러주는 부분.
module.exports.getDiaryPost = (req, res) => {
	const { body: { category_id } } = req;
	const addSql = category_id === 0 ? `` : `AND d.category_id = ${category_id}`;
	sql = `
		SELECT d.*, c.category_name 
		FROM diary d, category c 
		WHERE d.category_id = c.category_id
		${addSql}
	`;
	conn.query(sql, (err, data) => {
		if (err) {
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};