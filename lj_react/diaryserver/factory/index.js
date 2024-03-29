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

module.exports.postDiary = (req, res, next) => {
	console.log(req.body);
	const { body: { writer, content, title, category_id } } = req;
	sql = `
		INSERT INTO diary(writer, category_id, title, content, view, create_datetime)
		VALUES(?, ?, ?, ?, 0, NOW());
	`;
	conn.query(sql, [writer, category_id, title, content], (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
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

	console.log(file);

	const insertSQL = file.map(item => `(${diary_id}, '${item.filename}', '${item.originalname}', ${item.size}, '${item.mimetype}')`);

	sql = `INSERT INTO files(diary_id, filename, originalname, size, mimetype) VALUES ${insertSQL.join()}`;
	conn.query(sql, (err) => {
		if (err) {
			console.log(err);
			res.send(false);
		} else {
			res.send(true);
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
		ORDER BY diary_id DESC
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

// 게시글 상세보기
module.exports.getPostDetail = (req, res) => {
	const { params: { diary_id } } = req;
	sql = `SELECT * FROM diary WHERE diary_id = ?`;
	conn.query(sql, [diary_id], (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};

// 조회수 증가.
module.exports.increaseView = (req, res, next) => {
	const { params: { diary_id } } = req;
	sql = `UPDATE diary SET view = view + 1 WHERE diary_id = ?`;
	conn.query(sql, [diary_id], (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			next();
		}
	});
};

// 전체 코맨트를 불러오기
module.exports.getComment = (req, res) => {
	const { params: { diary_id } } = req;
	sql = `SELECT * FROM comment WHERE diary_id = ? ORDER BY comment_id DESC`;
	conn.query(sql, [diary_id], (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};

// 코맨트 작성하기
module.exports.postComment = (req, res) => {
	const { body: { writer, content, diary_id } } = req;
	sql = `INSERT INTO comment(writer, diary_id, content, datetime) VALUES(?, ?, ?, NOW())`;
	conn.query(sql, [writer, diary_id, content], (err) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			res.status(200).send(true);
		}
	});
};

// 파일을 불러오기
module.exports.getFiles = (req, res) => {
	const { params: { diary_id } } = req;
	sql = `SELECT * FROM files WHERE diary_id = ?`;
	conn.query(sql, [diary_id], (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(false);
		} else {
			res.status(200).send(data);
		}
	});
};