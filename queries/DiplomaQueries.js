const Diplomas = require('../model/diploma')

exports.getDiplomas = () => {
    return Diplomas.find()
    .sort({dateOfGraduation : -1})
}
