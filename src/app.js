import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import corsConfig from './Utils/corsConfig'
import mainRouter from './Routers/mainRouter'

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(corsConfig);
app.use(express.json());

app.use(mainRouter);

export default app;



