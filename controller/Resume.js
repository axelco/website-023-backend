const ResumeQueries = require ('../queries/ResumeQueries')

exports.GetJobTypes = (req, res, next) => {

    ResumeQueries.findAllJobTypes()
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

  ResumeQueries.getIntroByContext(req.params.jobContext)
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