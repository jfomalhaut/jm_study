const express = require('express');
const multer = require('multer');
const path = require('path');
const factory = require('../factory');
const router = express.Router();

const fileUpload = multer({
	storage: multer.diskStorage({
		destination: (req, file, callback) => {
			callback(null, './files/');
		},
		filename: (req, file, callback) => {
			console.log(file);
			const filename = file.fieldname + new Date().valueOf() + path.extname(file.originalname);
			callback(null, filename);
		}
	})
});

const field = [
	{ name: 'file' }
];

router.post('/postDiary', fileUpload.fields(field), factory.postDiary, factory.insertFiles);
router.post('/getDiaryPost', factory.getDiaryPost);
router.get('/getCategory', factory.getCategory);
router.get('/getPostDetail/:diary_id', factory.increaseView, factory.getPostDetail);
router.get('/getComment/:diary_id', factory.getComment);
router.get('/getFiles/:diary_id', factory.getFiles);
router.post('/postComment', factory.postComment);

module.exports = router;