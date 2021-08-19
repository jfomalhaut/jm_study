const express = require('express');
const path = require('path');
const multer = require('multer');
const factory = require('../factory');
const router = express.Router();

const fileUpload = multer({
	storage: multer.diskStorage({
		destination: (req, file, callback) => {
			callback(null, './files/');
		},
		filename: (req, file, callback) => {
			const filename = file.fieldname + new Date().valueOf() + path.extname(file.originalname);
			callback(null, filename);
		}
	})
});

const field = [
	{ name: 'file' }
];

router.post('/upload', fileUpload.fields(field), factory.insertPost, factory.insertFiles);

module.exports = router;