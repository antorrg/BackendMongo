import userController from "../../Controllers/users/userControllers.js";
import { userSaver, userVerifier } from "../../Controllers/users/userLogin.js";

const userHandler = async (req, res) => {
  try {
    const response = await userController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const userCreate = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const response = await userSaver(email, password, role);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await userVerifier(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { userHandler, userCreate, userLogin };
