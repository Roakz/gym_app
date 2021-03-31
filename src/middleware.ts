import User from './models/user';
import {Request, Response, NextFunction} from 'express';

const jwt = require('jsonwebtoken');

// This function will only be called if the Authenticated middleware function has already run. 
// Therefore the header will exist.
export function isAdmin(req: Request, res: Response, next: NextFunction):  void {
  let token = req.headers.authorization?.split(" ")[1];
  let payload = jwt.decode(token);
  if (payload.role === "Admin") {
    next();
  } else {
    res.status(403).send();
  }
};

export function Authenticated(req: Request, res: Response, next: NextFunction):void {
  if (req.headers.authorization) {
    let token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err: any) => {
      if (err) {
        res.status(403);
      } else {
        next();
      }
    })
  } else {
    res.status(403).send();
  }
};