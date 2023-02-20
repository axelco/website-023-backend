const express = require('express');
const router = express.Router();

const controller = require('../controller/Users');
const adminOnly = require('../middleware/adminOnly');

router.post('/signup', controller.signup);
router.post('/login', controller.login);
module.exports = router;