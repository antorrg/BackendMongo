import User from '../Models/user.js';  // Asegúrate de que la ruta del modelo sea correcta

const userSaver = async (email, password, name, image) => {
  try {
    // Crear una nueva instancia del modelo User
    const newUser = new User({
      email: email,
      username: name,
      password: password,
      image: image
      // Puedes establecer otros campos aquí según sea necesario
    });

    // Guardar el nuevo usuario en la base de datos
    const savedUser = await newUser.save();
    console.log('Usuario guardado:', savedUser);
    return savedUser;
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    throw error;
  }
};

export default userSaver;
