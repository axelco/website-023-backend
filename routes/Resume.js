const express = require('express');
const router = express.Router();

const controller = require('../controller/Resume');

router.get('/job-types', controller.GetJobTypes);
router.get('/intro/:jobContext', controller.getIntro);

module.exports = router;