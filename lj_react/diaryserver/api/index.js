const express = require('express');
const factory = require('../factory');
const router = express.Router();

router.post('/postDiary', factory.postDiary);
router.post('/getDiaryPost', factory.getDiaryPost);
router.get('/getCategory', factory.getCategory);
router.get('/getPostDetail/:diary_id', factory.increaseView, factory.getPostDetail);
router.get('/getComment/:diary_id', factory.getComment);
router.post('/postComment', factory.postComment);

module.exports = router;