const PersonalInfos = require('../model/personalInfo');

exports.GetPersonalInfos = (req, res, next) => {

    PersonalInfos.find()
    .then(
      (infos) => {
        res.status(200).json(infos[0]);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );

}