const express = require('express');
const router = express.Router();

const controller = require('../controller/Resume');
const jobsController = require('../controller/Jobs');

const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');

router.get('/contexts', controller.GetResumeContexts);
router.get('/contexts/:id', controller.getSingleResumeContext);
router.get('/intro/:jobContext', controller.getIntro);
router.get('/hard-skills/:jobContext', controller.getHardSkills);
router.get('/soft-skills', controller.getSoftSkills);

router.get('/job-companies', jobsController.getCompanies);
router.post('/job-companies',auth, adminOnly, jobsController.createCompany);
router.get('/job-companies/:id',auth, adminOnly, jobsController.getSingleCompany);
router.put('/job-companies/:id',auth, adminOnly, jobsController.saveCompany);

router.get('/jobs', jobsController.getJobs);
router.get('/jobs-grouped', jobsController.getJobsGrouped);
router.get('/jobs/:id', jobsController.getSingleJob);
router.post('/jobs',auth, adminOnly,  jobsController.createJob);
router.put('/jobs/:id',auth, adminOnly,  jobsController.saveJob);

module.exports = router;