import { Router } from "express";
import { Pool } from "../config/conex.js";

const router = Router();

router.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const [rows] = await Pool.query("SELECT * FROM users WHERE id = ?", [id]);

    console.log(id)
    // if (rows.length === 0) {
    //   res.status(404).send("Item not found");
    // } else {
    //   res.send(rows[0]);
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": "Error al obtener los usuarios" });
  }
});

export default router;