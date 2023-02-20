require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:YE7eKhUNhh2Xeb99@cluster0.xzue7.mongodb.net/'+process.env['DB_NAME'],
  { useNewUrlParser: true,
    useUnifiedTopology: true }
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
const router = express.Router();


// This middleware will allow us to read every json content-type sent to server
//  Without it we won't be able to read post request with json body
app.use(express.json()); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const HelloWorldRoute = require('./routes/HelloWorld.js')
app.use('/helloWorld', HelloWorldRoute);

const ResumeRoute = require('./routes/Resume')
app.use('/resume', ResumeRoute);

const PersonalInfosRoute = require('./routes/PersonalInfos')
app.use('/personal-infos', PersonalInfosRoute);

const UserRoutes = require('./routes/User')
app.use('/user', UserRoutes);

module.exports = app;