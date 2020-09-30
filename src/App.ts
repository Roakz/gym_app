import express from "express";
import cors from "cors";
import routes from './routes/app';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost/gym_app,', {useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const port: number = 8000;
const db: any = mongoose.connection;

// tslint:disable-next-line: no-console
db.on('error', console.error.bind('connection error'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port,()=>{
  process.stdout.write(`Listening on port ${port}...`);
});