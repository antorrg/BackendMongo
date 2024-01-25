import User from '../Models/user.js';  // Asegúrate de que la ruta del modelo sea correcta
import { generateToken } from '../Utils/encryptation.js';
import dotenv from 'dotenv';
dotenv.config()
const {USER_IMAGE}= process.env

const userSaver = async (email, password, role, image) => {
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      // El usuario ya existe, puedes manejar esto de alguna manera (lanzar un error, devolver un mensaje, etc.)
      throw new Error('This email already exists.');
    }
    // Crear una nueva instancia del modelo User
    const nickname = email.split('@')[0];

    const newUser = new User({
      email: email,
      password: password,
      nickname: nickname,
      role: role?? 'user',
      image: image??`${USER_IMAGE}`,
    
      // Puedes establecer otros campos aquí según sea necesario
    });

    // Guardar el nuevo usuario en la base de datos
    const user = await newUser.save();
    const token = generateToken(user);
    const data ={user, token}
    return data;
  } catch (error) {
    throw error;
  }
};

export default userSaver;
