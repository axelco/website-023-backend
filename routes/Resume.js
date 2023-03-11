const express = require('express');
const router = express.Router();

const controller = require('../controller/Resume');
const jobsController = require('../controller/Jobs');
const diplomasController = require('../controller/Diplomas')

const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');
const contextChecker = require('../middleware/resumeContextChecker')

router.get('/contexts', controller.GetResumeContexts);
router.get('/contexts/:name', controller.getSingleResumeContext);

// Ces routes nécessitent un context Name de CV
router.get('/intro/:contextName',contextChecker, controller.getIntro);
router.get('/hard-skills/:contextName',contextChecker, controller.getHardSkills);

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

router.get('/diplomas', diplomasController.GetDiplomas)

module.exports = router;