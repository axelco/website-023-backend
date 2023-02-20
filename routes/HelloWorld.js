const express = require('express');
const router = express.Router();

const controller = require('../controller/HelloWorld');
const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');

router.get('/', controller.GetHelloWorld);
router.get('/hello-admin',auth, adminOnly, controller.GetAdminHellowWorld);

module.exports = router;