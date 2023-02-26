const ResumeQueries = require ('../queries/ResumeQueries')

exports.GetResumeContexts = (req, res, next) => {
    
    ResumeQueries.getResumeContexts()
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

exports.getHardSkills = (req, res,next) => {
  ResumeQueries.getHardSkillsByContext(req.params.jobContext)
  .then(
    (hardSkills)=>{
      res.status(200).json(hardSkills);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );  
}

exports.getSoftSkills = (req, res,next) => {
  ResumeQueries.getSoftSkills()
  .then(
    (softSkills)=>{
      res.status(200).json(softSkills);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );  
}
