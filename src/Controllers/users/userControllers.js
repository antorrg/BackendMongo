import User from "../../Models/user.js";

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

export  {
  userController,
  updController
};
