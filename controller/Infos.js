const PersonalInfos = require('../model/personalInfo');
const Availabilities = require ('../model/availability')

exports.GetPersonalInfos = (req, res, next) => {

    PersonalInfos.find()
    .populate('availability')
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

exports.getAvailabilities = (req,res,next) => {
  Availabilities.find()
  .then(
    (items) => {
      res.status(200).json(items);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );  
}