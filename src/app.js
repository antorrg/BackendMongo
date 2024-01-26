import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { validJson, errorEndWare, corsConfig } from './Utils/index.js';
import mainRouter from './Routes/mainRouter.js';

const app = express();

app.use(cors ());
app.use(corsConfig)
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json())
app.use(validJson)

app.use(mainRouter)

app.use(errorEndWare)

export default app;