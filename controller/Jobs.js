const ResumeQueries = require ('../queries/ResumeQueries')
const JobCompany = require('../model/jobCompany')

exports.getCompanies = (req, res,next) => {
    ResumeQueries.getJobCompanies()
    .then(
      (companies)=>{
        res.status(200).json(companies);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );  
}

exports.getSingleCompany = (req, res,next) => {
    ResumeQueries.getSingleJobCompany(req.params.id)
    .then(
      (company)=>{
        res.status(200).json(company);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );  
}

exports.createCompany = (req, res, next) => {

    const company = new JobCompany({
      name: req.body.name,
    });

    // TODO : vérifier si le company Name n'existe pas déjà en base
    // Si oui, renvoyer une erreur 400, avec en réponse l'_id de la company trouvée
  
    if(req.body.description){
        company.description = req.body.description
    }
    if(req.body.websiteUrl){
        company.url = req.body.websiteUrl
    }    
    company.save().then(
      () => {
        res.status(201).json({
          message: 'Company added'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );  
  }

  exports.saveCompany = (req,res,next) => {

    JobCompany.findOne({
      _id : req.params.id
    })
    .then(
      (item) =>{
        if(item === null){
          return res.status(400).json({message : "Resource not found"});
        }      
  
        item.name = req.body.name
        item.description = req.body?.description
        item.url = req.body?.url
  
        item.save()
        .then(
          ()=>{
          res.status(201).json({message : "Job company updated"});
        }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        ); 
      }
    )
  }