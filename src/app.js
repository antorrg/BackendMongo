const express =require ('express');
const cors =require ('cors');
const morgan =require ('morgan')
const corsConfig =require ('./Utils/corsConfig')
const mainRouter =require ('./Routers/mainRouter')

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(corsConfig);
app.use(express.json());

app.use(mainRouter);

module.exports = app;



