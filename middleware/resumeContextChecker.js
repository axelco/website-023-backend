const ResumeQueries = require('../queries/ResumeQueries.js')

module.exports = (req, res, next) => {

    ResumeQueries.getSingleResumeContextByName(req.params.contextName)
    .then(
      (context) => {
        if(context === null){
          return res.status(404).json({error : {message : "wrong context provided"}});
        }else{
            req.resume.contextId = context._id
            next()
        }        
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );      
};