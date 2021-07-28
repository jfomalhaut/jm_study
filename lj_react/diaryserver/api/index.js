const express = require('express');
const factory = require('../factory');
const router = express.Router();

router.post('/postDiary', factory.postDiary);
router.post('/getDiaryPost', factory.getDiaryPost);
router.get('/getCategory', factory.getCategory);

module.exports = router;