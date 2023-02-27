const express = require('express');
const router = express.Router();

const controller = require('../controller/Infos');

router.get('/', controller.GetPersonalInfos);
router.get('/availabilities', controller.getAvailabilities);

module.exports = router;