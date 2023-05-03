import { Router } from "express";
import { Pool } from "../config/conex.js";

const router = Router();

router.get('/users', async (req, res) => {
    try {
      // Ejecuta una consulta SELECT para obtener los registros de usuarios
      const result = await pool.query('SELECT * FROM users');
  
      // Retorna los registros de usuarios en formato JSON
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ "error": 'Error al obtener los usuarios' });
    }
  });
  
  export default router;