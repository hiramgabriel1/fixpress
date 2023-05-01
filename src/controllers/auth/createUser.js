import colors from "colors";
import { Pool } from "../../config/conex.js";
import bcrypt from "bcrypt";

// create a new user
export const createUser = async (req, res) => {
  try {
    // get data
    const username = req.body.username;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const typeuser = req.body.typeuser;

    // hash password user
    const hashPassword = await bcrypt.hash(password, 10);

    // save data user in database
    const [rows] = await Pool.query(
      "INSERT INTO users (nombre, apellido, correo, contraseña, tipo_usuario) VALUES (?,?,?,?,?)",
      [username, lastName, email, hashPassword, typeuser]
    );

    // validate response
    rows
      ? res.json({ "message": "funciona" })
      : res.json({ "message": res.status(500) });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    // Ejecuta una consulta SELECT para obtener los registros de usuarios
    const result = await Pool.query("SELECT * FROM users");

    // Retorna los registros de usuarios en formato JSON
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};