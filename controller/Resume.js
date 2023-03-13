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

exports.getSingleResumeContext = (req,res,next) => {
  ResumeQueries.getSingleResumeContextByName(req.params.name)
  .then(
    (context) => {
      res.status(200).json(context)
      
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

// req.resume.contextId est paramétré dans le middleware
exports.getIntro = (req,res,next) => {

  ResumeQueries.getIntroByContextId(req.resume.contextId)
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

exports.getPdf = (req,res,next) => {
  ResumeQueries.getResumePdfByContextId(req.resume.contextId)
  .then(
    (pdf)=>{
      res.status(200).json(pdf);
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
  ResumeQueries.getHardSkillsByContext(req.resume.contextId)
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
