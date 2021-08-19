const express = require('express')
const path = require('path')
const multer = require('multer')
const router = express.Router()

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './files/')
    },
    filename: (req, file, callback) => {
      const filename =
        file.fieldname + new Date().valueOf() + path.extname(file.originalname)
      callback(null, filename)
    },
  }),
})

const field = [{ name: 'file' }]

router.post('/upload', fileUpload.fields(field), (req, res) => {
    const { files: {file}} = req;
    console.log(file);
  res.send('success')
})

module.exports = router
