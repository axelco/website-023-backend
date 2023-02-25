const ResumeQueries = require ('../queries/ResumeQueries')
const JobCompany = require('../model/jobCompany')
const Job = require('../model/job')

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

exports.getJobs = (req, res, next) => {
    ResumeQueries.getJobs()
    .then(
        (jobs)=>{
          res.status(200).json(jobs);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );      
}

exports.getJobsGrouped = (req,res,next) => {
  ResumeQueries.getJobs()
  .then(
      (jobs)=>{

        // Resp est l'array de la réponse
        // Il contiendra des objets regroupant les jobs
        // De chaque company
        let jobsByCompanies = []

        jobs.forEach((item)=>{

          const itemIndex = jobs.indexOf(item)

          // On créé on objet CompanyItem pour le groupe par société
          // Car on y ajoutera des données que mongoose ne connait pas dans le 
          // Model JobCompany (sans ça on ne peut les ajouter)
          const companyItem = {
            _id : item.company._id,
            name : item.company.name,
            description : item.company?.description,
            websiteUrl : item.company?.websiteUrl,
          }

          // Cet object représente le groupe de jobs avec la société associée
          let companyObject = {
            company : companyItem,
            jobs : [],
          }

          // Pour le premier item de la loop,
          // On va simplement créer notre premier objet dans resp
          if(itemIndex === 0){

            companyObject.jobs.push(item)
            jobsByCompanies.push(companyObject)

          }
          // Pour les autres éléments de la loop
          // On doit contrôler si l'élément précédent avait la même company
          // Afin de déterminer si on regroupe ou non l'item de la loop avec un
          // object existant
          else{

            const previousItem = jobs[itemIndex - 1]

            if(previousItem.company._id === item.company._id){

              // Ici on doit donc simplement ajouter item dans l'array de la société
              // déjà dans l'array resp
              let findRespCompany = jobsByCompanies.find(e => e.company._id === item.company._id)
              findRespCompany.jobs.push(item)

            }else{
              // Ici on doit créer un nouvel objet Company avec le job en question
              companyObject.jobs.push(item)
              jobsByCompanies.push(companyObject)                            
            }
          }

        })

        // Il faut placer des dates de début de et fin pour chaque groupe de société
        // En regardant les dates de début / fin de chaque item.jobs
          // On prend la date de fin du premier item, et la date du début du dernier
        jobsByCompanies.forEach((item)=>{
            const nbJobsInCompany = item.jobs.length
            const latestJob = item.jobs[0]
            const oldestJob = item.jobs[nbJobsInCompany -1]

            item.company.startDate = oldestJob.startDate
            item.company.endDate = latestJob.endDate
            
        })        

        res.status(200).json(jobsByCompanies);

      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );      
}

exports.getSingleJob = (req, res, next) => {
    ResumeQueries.getSingleJob(req.params.id)
    .then(
        (job)=>{
          res.status(200).json(job);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );      
}

exports.createJob = (req, res, next) => {

    const job = new Job({
      name: req.body.name,
      company: req.body.company,
      startDate : req.body.startDate,
      contractType: req.body.contractType,
      location: req.body.location,
    });

    if(req.body.endDate){
        job.endDate = req.body.endDate
    }

    if(req.body.shortDescription){
        job.shortDescription = req.body.shortDescription
    }    
  
    job.save().then(
      () => {
        res.status(201).json({
          message: 'Job added'
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

  exports.saveJob = (req,res,next) => {

    Job.findOne({
      _id : req.params.id
    })
    .then(
      (item) =>{
        if(item === null){
          return res.status(400).json({message : "Resource not found"});
        }      
  
        item.name =  req.body.name
        item.company =  req.body.company
        item.startDate = req.body.startDate
        item.contractType = req.body.contractType
        item.location = req.body.location
        item.shortDescription = req.body?.shortDescription
        item.endDate = req.body?.endDate

  
        item.save()
        .then(
          ()=>{
          res.status(201).json({message : "Job updated"});
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