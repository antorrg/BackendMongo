import {userController, updController, adminUpdController, delController} from "../../Controllers/users/userControllers.js";
import { userSaver, userVerifier } from "../../Controllers/users/userLogin.js";
//Función get
const userHandler = async (req, res) => {
  try {
    const response = await userController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Función update user.
const userUpdHandler = async (req, res)=>{
  const {id}=req.params;
  const {password, username, usersurname, image} = req.body;
  console.log(req.body)
  try {
    const response = await updController(id, password, username, usersurname, image);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const adminUpdHandler = async (req, res)=>{
  const {id}=req.params;
  const {password, role, username, usersurname, image, enable} = req.body;
  console.log(req.body)
  try {
    const response = await adminUpdController(id, password, role, username, usersurname, image, enable);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//Función para borrar un usuario
const userDelHandler= async (req, res) =>{
  const {id}= req.params;
    try{
      const response = await delController(id);
      res.status(200).json(response);
    }catch(error){
       res.status(500).json({ error: error.message });
    }
}

//Función para crear un usuario
const userCreate = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const response = await userSaver(email, password, role);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//función para autenticar usuario
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await userVerifier(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { 
  userHandler, 
  userCreate, 
  userLogin,
  userUpdHandler,
  adminUpdHandler,
  userDelHandler
};
