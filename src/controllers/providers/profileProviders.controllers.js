import { Pool } from "../../config/conex.js";

export const profileProvider = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await Pool.query("SELECT * FROM providers WHERE id = ?", [id]);

    if (rows.length === 0) {
      res.status(404).send("No se ha encontrado al usuario");
    } else {
      
      // render data profile
      res.send(rows[0]);
      const dataUser = [];
      dataUser.push(rows[0]);
      dataUser.forEach((data) => {
        console.log(data);
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": "Error al obtener el usuario" });
  }
};