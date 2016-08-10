var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploading = multer({ dest: __dirname + './public/uploads/'});

router.post('/upload', uploading.single('submission'), function (req, res, next) {

});

module.exports = router;
