import express from "express";
import cors from "cors";
import routes from './routes/app';
import userRouter from './routes/user';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

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
app.use('/', routes);
app.use('/user', userRouter);

app.listen(port,()=>{
  process.stdout.write(`Listening on port ${port}...`);
});