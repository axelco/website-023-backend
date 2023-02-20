 
module.exports = (req, res, next) => {
    try {
        console.log(req.auth.userRoles)
        const isAdmin = req.auth.userRoles.includes('ADMIN');
        if(!isAdmin){
         throw {
             message : 'not authorized'
         }        
        }
        else{
            next()
        }
        
    } catch(error) {
        res.status(401).json({ error});
    }
 };