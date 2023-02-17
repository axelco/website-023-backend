const express = require('express');
const router = express.Router();

const controller = require('../controller/Infos');

router.get('/', controller.GetPersonalInfos);

module.exports = router;