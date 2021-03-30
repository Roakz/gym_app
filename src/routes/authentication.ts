import express, {Router, Request, Response} from 'express';
import { Mongoose } from 'mongoose';

const router: Router = express.Router();
const jwt = require('jsonwebtoken');

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
  function(req: Express.Request, res: Response) {
      let userId: string;
      let token: JsonWebKey;
      let user: any;
  
      if (req.user)
      {
        user = req.user
        userId = user._id;
        token = jwt.sign(
            {userId: userId, role:"n/a", username: user.username},
            process.env.JWT_SECRET,
            {expiresIn: '86400'}
          );
        res.status(200).json({jwt_token: token})
      } else {
        res.status(500).send()
      }
  });
  
  export default router;