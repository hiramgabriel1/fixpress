import { Pool } from "../../config/conex.js";
import http from "http";
import { Server } from "socket.io";

// instance socket.io implementation
const io = new Server();
const portSocket = 4000;

// config server PORT
io.listen(portSocket);

const validateConnectionUser = () => {
  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

const validateMessageReceived = () => {
  io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
      console.log("message: " + msg);
    });
  });
};

// send messages
export const submitMessage = async (req, res) => {
  const message = req.body.message;
  if (message) {
    socket.emit("message", message);
  }
};

// show messages
export const showMessage = async (req, res) => {
  console.log(validateConnectionUser());
  console.log(validateMessageReceived());

  // toast a message new received
  res.send(validateMessageReceived());

//   socket.on("chat message", function (msg) {
//     var item = document.createElement("li");
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
//   });
};
