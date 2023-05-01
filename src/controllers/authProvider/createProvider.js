import { Pool } from "../../config/conex.js";
import bcrypt from "bcrypt";

export const createProvider = async (req, res) => {
  try {
    const username = req.body.username;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const description = req.body.description;
    const experience = req.body.experience;
    const imageReference = req.body.imageReference;
    const especificacion = req.body.especificacion;

    const passwordHash = await bcrypt.hash(password, 10);
    
    const query = Pool.query(
      "INSERT INTO providers (username, lastname, password, description, experience, imageReference, especificacion) VALUES (?,?,?,?,?,?,?)",
      [
        username,
        lastName,
        passwordHash,
        description,
        experience,
        imageReference,
        especificacion,
      ]
    );
    if (query) {
      res.json({
        "message": "success!",
        "data": query
      });
    }
  } catch (error) {
    console.log(error);
  }
};