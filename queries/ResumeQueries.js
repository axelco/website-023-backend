const ResumeContext = require('../model/resumeContext')
const ResumeIntros = require('../model/resumeIntro')
const ResumeHardSkills = require ('../model/resumeHardSkill')
const ResumeSoftSkills = require('../model/resumeSoftSkill')
const JobCompanies = require('../model/jobCompany')

exports.findAllJobTypes = () => {
    return ResumeContext.find()
}

exports.getIntroByContext = (jobContext) => {
    return ResumeIntros.findOne({jobContext : jobContext})
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