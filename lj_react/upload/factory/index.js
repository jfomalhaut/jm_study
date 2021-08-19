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

module.exports.insertPost = (req, res, next) => {
	const { body: { writer, title, content, category_id } } = req;
	console.log(req.body);
	sql = `INSERT INTO diary(writer, title, content, category_id, create_datetime) VALUES(?, ?, ? ,?, NOW())`;

	conn.query(sql, [writer, title, content, category_id], (err, result) => {
		if (err) {
			res.send(false);
		} else {
			const { insertId } = result;
			res.locals.diary_id = insertId;
			next();
		}
	});
};

module.exports.insertFiles = (req, res) => {
	const { files: { file = [] } } = req;
	const { locals: { diary_id } } = res;
	if (file.length === 0) {
		res.send(true);
		return;
	}

	const insertSQL = file.map(item => `(${diary_id}, '${item.filename}', '${item.originalname}', ${item.size})`);

	sql = `INSERT INTO files(diary_id, filename, originalname, size) VALUES ${insertSQL.join()}`;
	console.log(sql);
	conn.query(sql, (err) => {
		if (err) {
			res.send(false);
		} else {
			res.send(true);
		}
	});
};