import { Pool } from "../../config/conex.js";
import http from "http";
import { Server } from "socket.io";

// instance socket.io implementation
const io = new Server();
const portSocket = 4000;

// config server PORT
io.listen(portSocket);

io.on("connection", (socket)=>{
    console.log("user connected");
})

// send messages
export const submitMessage = async (req, res) => {

};

// show messages
export const showMessage = async (req, res) => {

};