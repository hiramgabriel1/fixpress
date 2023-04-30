// modules
import express from "express";
import cors from "cors";
import loginUser from "./routes/loginUser.routes.js"
import createUser from "./routes/createUser.routes.js"

// config
const app = express();
const port = 5000

// middlewares
app.use(express.json())
app.use(cors())

// endpoints
app.use("/auth", loginUser)
app.use("/register", createUser)

// listen server on port 5000
app.listen(port)