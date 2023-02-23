const express = require('express');
const router = express.Router();

const controller = require('../controller/Resume');
const jobsController = require('../controller/Jobs');

const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');

router.get('/job-types', controller.GetJobTypes);
router.get('/intro/:jobContext', controller.getIntro);
router.get('/hard-skills/:jobContext', controller.getHardSkills);
router.get('/soft-skills', controller.getSoftSkills);

router.get('/job-companies', jobsController.getCompanies);
router.post('/job-companies',auth, adminOnly, jobsController.createCompany);
router.get('/job-companies/:id',auth, adminOnly, jobsController.getSingleCompany);
router.put('/job-companies/:id',auth, adminOnly, jobsController.saveCompany);

module.exports = router;