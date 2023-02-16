const express = require('express');
const router = express.Router();

const controller = require('../controller/Resume');

router.get('/job-types', controller.GetJobTypes);

module.exports = router;