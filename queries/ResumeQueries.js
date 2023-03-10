const ResumeContext = require('../model/resumeContext')
const ResumeIntros = require('../model/resumeIntro')
const ResumeHardSkills = require ('../model/resumeHardSkill')
const ResumeSoftSkills = require('../model/resumeSoftSkill')
const JobCompanies = require('../model/jobCompany')
const Job = require('../model/job')

exports.getResumeContexts = () => {
    return ResumeContext.find()
}

exports.getSingleResumeContext = (id) => {
    return ResumeContext.findById(id)
}

exports.getSingleResumeContextByName = (name) => {
    return ResumeContext.findOne({technicalName: name})
}

exports.getIntroByContextId = (jobContextID) => {
    return ResumeIntros.findOne({jobContext : jobContextID})
    .populate('jobContext')
    .exec()
}

// On récupère les hardSkills en fonction du paramètre jobContext
// qui représente un objectId lié au modèle resumeContext
// On sort par défaut en fonction du champ order par ordre descendant
exports.getHardSkillsByContext = (jobContext) => {
    return ResumeHardSkills.find({jobContext : jobContext})
        .sort( { order : 1 } )
}

exports.getSoftSkills = () => {
    return ResumeSoftSkills.find().sort( { order : 1 } )
}

exports.getJobCompanies = () => {
    return JobCompanies.find()
}

exports.getSingleJobCompany = (id) => {
    return JobCompanies.findById(id)
}

exports.getJobs = () => {
    return Job.find()
    .sort({startDate : -1})
    .populate('company')
    .exec()
}

exports.getSingleJob = (id) => {
    return Job.findById(id)
    .populate('company')
    .exec()    
}