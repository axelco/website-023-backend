const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
        if(!req.headers.authorization){
            throw {
                name : 'noToken',
                message : 'please provide token'
            }
        }else{
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, process.env['SECRET_TOKEN_KEY']);

            req.auth = {
                userId: decodedToken.userId,
                userRoles : decodedToken.userRoles,

            };
            next();
        } 

   } catch(error) {
       res.status(401).json({ error });
   }
};