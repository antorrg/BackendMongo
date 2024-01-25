import User from '../Models/user.js';  // Asegúrate de que la ruta del modelo sea correcta
import { generateToken } from '../Utils/encryptation.js';

const userSaver = async (email, password, name, image) => {
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      // El usuario ya existe, puedes manejar esto de alguna manera (lanzar un error, devolver un mensaje, etc.)
      throw new Error('This email already exists.');
    }
    // Crear una nueva instancia del modelo User
    const newUser = new User({
      email: email,
      username: name,
      password: password,
      image: image
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
