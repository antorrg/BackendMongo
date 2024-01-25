import bcrypt from 'bcrypt';

const middleLogin = async (req, res, next)=>{
    const{email, password}= req.body;
    if(!email){return res.status(400).json({error: "missing email"})};
    if(!password){return res.status(400).json({error: "missing password"})};
    if(password){
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password= hashedPassword;
    }
    next();
}
export default middleLogin;