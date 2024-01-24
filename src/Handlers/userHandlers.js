import userController from '../Controllers/userControllers.js'
import userSaver from '../Controllers/userLogin.js'

const userHandler = async(req, res)=>{
    try {
        const response = await userController();
        res.status(200).json(response);
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
const userCreate = async (req, res)=>{
    const {email, password, name, image}= req.body;
    try {
        const response = await userSaver(email, password, name, image);
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

export {
    userHandler,
    userCreate
};