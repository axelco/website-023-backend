const ResumeJobs = require('../model/resumeJob');

exports.GetJobTypes = (req, res, next) => {

    ResumeJobs.find()
    .then(
      (resumeJob) => {
        res.status(200).json(resumeJob);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );

}