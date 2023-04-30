// modules
import express from "express";
import cors from "cors";
import loginUser from "./routes/loginUser.routes.js"
import createUser from "./routes/createUser.routes.js"
import profileProvider from "./routes/providers/profileProvider.routes.js"

// config
const app = express();
const port = 5000

// middlewares
app.use(express.json())
app.use(cors())

// endpoints AUTH
app.use("/auth", loginUser)
app.use("/register", createUser)

// endpoints CATEGORYS
app.use("/categoy", loginUser)

// endpoints PROVIDERS
app.use("/profile/provider", profileProvider)

// listen server on port 5000
app.listen(port)