const io = require("socket.io");
const server = io.listen(3000);
server.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (message) => {
    server.emit("message", message);
  });
  socket.on("login", (nickname) => {
    socket.emit("loggedIn");
  });
});
