import { Pool } from "../../config/conex.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  try {
    // datos del usuario
    const { correo, passwordUser } = req.body;

    // buscar usuario en la base de datos
    const result = await Pool.query("SELECT * FROM users WHERE correo = ?", [
        correo
      ]);
      
      if (!result || !result.rows || result.rows.length === 0) {
        return res.status(401).json({
          "errorMessage": "Email o contraseña incorrecta. Intenta denuevo",
        });
      }
      
      const user = result.rows[0];
      // resto del código
      
    // Verificar que el usuario existe y tiene una contraseña antes de comparar
    if (!user || !user.password) {
      // Si no hay usuario o la contraseña es nula, responder con un error 401
      return res
        .status(401)
        .json({
          "errorMessage": "Email o contraseña incorrecta. Intenta denuevo",
        });
    }

    // Comparar la contraseña proporcionada por el usuario con la contraseña cifrada almacenada en la base de datos
    bcrypt.compare(passwordUser, user.password, (err, result) => {
      if (err) {
        // Si hay un error, responder con un error 500
        return res
          .status(500)
          .json({
            "errorMessage":
              "Tenemos problemas con tu inicio de sesión. Por favor intenta denuevo ".concat(
                err.message
              ),
          });
      }
      if (!result) {
        // Si las contraseñas no coinciden, responder con un error 401
        return res
          .status(401)
          .json({
            "errorMessage": "Email o contraseña incorrecta. Intenta denuevo",
          });
      }
      // Si la comparación es exitosa, responder con un código de estado 200 y un mensaje de éxito
      res.status(200).json({ "successMessage": "auth" });
    });
  } catch (error) {
    res.status(401).json({ "errorMessage": error.message });
    console.log(error);
  }
};
