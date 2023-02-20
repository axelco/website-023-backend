const User = require ('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash,
          roles : "USER", // By default we set ROLE_USER which will only access admin without any permissions
        });
        user.save()
          .then(() => res.status(201).json({ message: 'user created' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'not authorized'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'not authorized' });
                    }
                    console.log(user)
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id, userRoles : user.roles },
                            process.env['SECRET_TOKEN_KEY'],
                            { expiresIn: '1h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };

 exports.checkCredentials = (req,res,next)=>{
    res.status(200).json({message : "checked"})
 }