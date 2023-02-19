const express = require('express');
const router = express.Router();

const controller = require('../controller/Resume');

router.get('/job-types', controller.GetJobTypes);
router.get('/intro/:jobContext', controller.getIntro);
router.get('/hard-skills/:jobContext', controller.getHardSkills);
router.get('/soft-skills', controller.getSoftSkills);

module.exports = router;