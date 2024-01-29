import User from "../../Models/user.js";
//controlador get para obtener usuarios
const userController = async () => {
  try {
    const response = await User.find();
    const data = response;
    if (!data) {
      throw new Error("Error fetching data");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
//controlador update para actualizar usuarios
const updController = async (id, npassword, nrole, nusername, nusersurname, nimage, nenable)=>{
   
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
         $set:{
          password: npassword,
          username: nusername,
          usersurname: nusersurname,
          image: nimage,
          role: nrole,
          enable:nenable
         },
        },
        {new:true} // Esto devuelve el documento actualizado
        );
        if(!updatedUser){throw new Error('failed update')};
        return updatedUser;
    } catch (error) {
      throw error;
    }
}
//controlador del para borrar usuarios (borrado lógico)
const delController = async(id)=>{
    try {
      const deletedUser = await User.findByIdAndUpdate(
        id,
        {
         $set:{
          deleted:true
         },
        },
        {new:true} // Esto devuelve el documento actualizado
        );
        if(!deletedUser){throw new Error('failed deleted')};
        return deletedUser;
    } catch (error) {
      throw error;
    }
}

export  {
  userController,
  updController,
  delController
};
