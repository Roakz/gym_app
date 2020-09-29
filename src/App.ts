import express from "express";
import cors from "cors";

const app = express()
import routes from './routes/app';

app.use(cors());
app.use('/', routes)

app.listen(8000,()=>{
  console.log('Server Started at Port, 8000')
})