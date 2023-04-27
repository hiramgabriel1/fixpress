import colors from "colors";
import { Pool } from "../../config/conex.js";
import bcrypt from "bcrypt";

// create a new user
export const createUser = async (req, res) => {
try {
  // get data
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const typeuser = req.body.typeuser;

    // hash password user
    const hashPassword = await bcrypt.hash(password, 10);

    // save data user in database
    const [rows] = await Pool.query(
      "INSERT INTO users (username, email, password, type_user, phone) VALUES (?,?,?,?,?)",
      [username, email, hashPassword, typeuser, phone]
    );

    // validate response
    rows
      ? res.json({ "message": "funciona" })
      : res.json({ "message": res.status(500) });

  } catch (error) {
    console.log(error);
  }
};
