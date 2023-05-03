// modules
import express from "express";
import cors from "cors";
import loginUser from "./routes/loginUser.routes.js";
import createUser from "./routes/createUser.routes.js";
import profileProvider from "./routes/providers/profileProvider.routes.js";
import createProvider from "./routes/providers/createProvider.routes.js";
import loginProvider from "./routes/providers/loginProvider.routes.js";
import profileUser from "./routes/profileUser/profileUser.routes.js";
import chat from "./routes/chat/chat.routes.js";

// config
const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors());

// endpoints AUTH users
app.use("/auth", loginUser);
app.use("/register", createUser);

// endpoints CONTRATISTAS
app.use("/new/provider", createProvider);
app.use("/auth/provider", loginProvider);

// endpoints USERS PROFILE
app.use("/user", profileUser);

// endpoints CONTRATISTAS
app.use("/profile/provider", profileProvider);

// endpoints CHAT
app.use("/chat", chat);

// listen server on port 5000
app.listen(port);