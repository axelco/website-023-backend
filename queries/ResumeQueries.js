const ResumeContext = require('../model/resumeContext');
const ResumeIntros = require('../model/resumeIntro')

exports.findAllJobTypes = () => {
    return ResumeContext.find()
}

exports.getIntroByContext = (jobContext) => {
    return ResumeIntros.findOne({jobContext : jobContext})
    .populate('jobContext')
    .exec()
}