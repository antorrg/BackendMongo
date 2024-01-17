const express =require ('express');
const cors =require ('cors');
const morgan =require ('morgan')
const corsConfig =require ('./Utils/corsConfig')
const {validJson, errorEndWare}= require('./Utils/validJson')
const mainRouter =require ('./Routers/mainRouter')

const app = express();
app.use(cors());
app.use(corsConfig);
app.use(morgan('dev'));
app.use(express.json());
app.use(validJson)

app.use(mainRouter);

app.use(errorEndWare)

module.exports = app;



