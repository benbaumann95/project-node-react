const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//ClientID: 946694402490-es6mgm86d1q2vpgo70gb63oclu070c49.apps.googleusercontent.com
//Client Secret: VMtl1DRSO87yeKmlD9utALw0

passport.use(new GoogleStrategy());

// app.get('/', (req, res) => {
//   res.send({ hi: 'there' });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
