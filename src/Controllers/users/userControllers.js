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

export default userController;
