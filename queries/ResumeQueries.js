const ResumeJobs = require('../model/resumeJob');
const ResumeIntros = require('../model/resumeIntro')

exports.findAllJobTypes = () => {
    return ResumeJobs.find()
}

exports.getIntroByContext = (jobContextId) => {
    return ResumeIntros.findOne({jobContext : jobContextId})
    .populate('jobContext')
    .exec()
}