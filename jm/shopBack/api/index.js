const express = require('express');
const path = require('path');
const factory = require('../factory');
const router = express.Router();

router.post('/postShop', factory.postShop);
router.get('/getShop', factory.getShop);

module.exports = router;