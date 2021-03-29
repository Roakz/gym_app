import express, {Router}from 'express';

const router: Router = express.Router();

const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

import User from '../models/user';

    passport.use(new LocalStrategy(
        function(username: string, password: string, done: any) {
          User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false);
            }
            if (password != user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        }
      ));

router.post('/', passport.authenticate('local', { session: false }),
// This only gets called if the passport middleware successfully authenticates.
function(req, res) {
  //   do some token stuff and send it to the client.
  res.status(200).send()
});

export default router;