const express = require('express');
const router = express.Router();

const controller = require('../controller/HelloWorld');

router.get('/', controller.GetHelloWorld);

module.exports = router;