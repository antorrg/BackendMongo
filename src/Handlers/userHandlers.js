import userController from '../Controllers/userControllers.js'

const userHandler = async(req, res)=>{
    try {
        const response = await userController();
        res.status(200).json(response);
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export default userHandler;