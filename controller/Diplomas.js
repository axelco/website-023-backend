const DiplomaQueries = require('../queries/DiplomaQueries')

exports.GetDiplomas = (req, res, next) => {
    
    // We check if query graduated is sent is request
    // And handl the values
    // const graduatedQuery = req.query.graduated
    // let graduated = true;
    // if(graduatedQuery !== undefined && graduatedQuery !== ""){
    //     graduated = graduatedQuery
    // }

    // We use getDiplomas with param graduated
    DiplomaQueries.getDiplomas()
    .then(
      (diplomas) => {
        const response = {
            graduated : [],
            inProgress : []
        }

        diplomas.forEach(item => {
            if(item.graduated){
                response.graduated.push(item)
            }else{
                response.inProgress.push(item)    
            }
        });

        res.status(200).json(response);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );

}