const express = require('express');
const factory = require('../factory')
const router = express.Router();


router.post('/postDiary', factory.postDiary);
router.get('/getCategory', factory.getCategory);
router.post('/getDiaryPost', factory.getDiaryPost);

module.exports = router;