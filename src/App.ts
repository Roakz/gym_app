require('dotenv').config()

import express from "express";
import cors from "cors";
import routes from './routes/app';
import userRouter from './routes/user';
import exerciseRouter from './routes/exercise';
import workoutRouter from './routes/workout';
import authenticationRouter from './routes/authentication';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {Authenticated} from './middleware';

const passport = require('passport');
const app: express.Express = express();
const port: number = 8000;
const uri: string = 'mongodb://localhost:27017/gymApp';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
  if (err) {
    // tslint:disable-next-line: no-console
    console.log(err.message);
  } else {
    // tslint:disable-next-line: no-console
    console.log('\nDb connected!');
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use('/', routes);
app.use('/authenticate', authenticationRouter);
app.use(Authenticated);
app.use('/user', userRouter);
app.use('/exercise', exerciseRouter);
app.use('/workout', workoutRouter);

app.listen(port,()=>{
  process.stdout.write(`Listening on port ${port}...`);
});