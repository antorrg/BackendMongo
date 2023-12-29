//todo        db    88b 88 888888  dP"Yb  88""Yb 88""Yb  dP""b8 
//todo       dPYb   88Yb88   88   dP   Yb 88__dP 88__dP dP   `" 
//todo      dP__Yb  88 Y88   88   Yb   dP 88"Yb  88"Yb  Yb  "88 
//todo     dP""""Yb 88  Y8   88    YbodP  88  Yb 88  Yb  YboodP 

//* .oPYo. .oPYo.     .o .o .oPYo.     .o .oPYo. .oPYo. .oPYo. .oPYo. 
//*     `8 8'  `8    .o'  8     `8    .o'     `8 8  .o8     `8     `8 
//*    oP' 8.  .8   .o'   8    oP'   .o'     oP' 8 .P'8    oP'   .oP' 
//* .oP'   `YooP8  .o'    8 .oP'    .o'   .oP'   8.d' 8 .oP'      `b. 
//* 8'         .P .o'     8 8'     .o'    8'     8o'  8 8'         :8 
//* 8ooooo `YooP' o'      8 8ooooo o'     8ooooo `YooP' 8ooooo `YooP' 
//*.......:.....:..::::::...........:::::.......:.....:.......:.....:
//!:::::::::::::::Proyecto con Base de datos MongoDB::::::::::::::::
//*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const {PORT}=process.env;

app.listen(PORT, ()=>{
    console.log(`Server is listening in port ${PORT} ✔️,
Congratulations!! Everything is allrigt 😉!!`);
});