const ResumeJobs = require('../model/resumeJob');
const ResumeIntros = require('../model/resumeIntro')

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

// @params jobContext : correspond à l'ID d'un resumeJob
exports.getIntro = (req,res,next) => {

  ResumeIntros.findOne({jobContext : req.params.jobContext})
  .populate('jobContext')
  .exec()
  .then(
    (intro)=>{
      res.status(200).json(intro);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );

}