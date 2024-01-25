import pkg from 'jsonwebtoken';
const {sign, verify} = pkg;
// import {sign, verify} from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const {SECRET_KEY}=process.env;

const generateToken = (user)=>{
    const secretKey = SECRET_KEY;
    const token = sign({userId: user.id, email:user.email, role:user.role}, secretKey,{expiresIn: '5h'});
    return token;
}

const verifyToken =(req, res, next)=>{
    const token = req.headers['x-access-token']||req.headers.authorization;
    if(!token){return res.status(401).json({error: 'Access denied. Missing token'})};
    verify(token, SECRET_KEY, (err, decoded)=>{
        if(err){
            if(err.name === 'TokenExpiredError'){
                return res.status(401).json({error: 'Token Expired'});
            }
            return res.status(401).json({error:'Invalid Token'});
        }
        req.user= decoded;
        const userId= decoded.id;
        const userRole = decoded.role;
        req.userInfo={userId, userRole};
        console.log(req.userInfo +' userInfo')
        next();
    })
}

const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      const {userRole}= req.userInfo;
      //const userRole = req.user.role; // asumiendo que el rol está en req.user después de la autenticación
  
      if (allowedRoles.includes(userRole)) {
        // El usuario tiene el rol necesario, permitir el acceso
        next();
      } else {
        // El usuario no tiene el rol necesario, rechazar la solicitud
        res.status(403).json({ error: 'Access unauthorized' });
      }
    };
  };


export {
    generateToken,
    verifyToken,
    checkRole
};
  
//   // Uso del middleware en una ruta específica
//   app.get('/ruta-protegida', checkRole(['admin']), (req, res) => {
//     // Código de la ruta protegida
//     res.json({ mensaje: 'Acceso autorizado' });
//   });
  


