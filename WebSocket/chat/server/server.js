const io = require("socket.io");
const server = io.listen(3000);
const active_users = [];
server.on("connect", (socket) => {
  console.log("connected");
  socket.on("message", (message) => {
    const user = active_users.find((u) => u.id == socket.id);
    if (user) {
      server.emit("message", { user: user.nickname, message });
    }
  });
  socket.on("login", (nickname) => {
    active_users.push({
      nickname: nickname,
      id: socket.id,
    });
    socket.emit("loggedIn");
    socket.broadcast.emit("userJoined", nickname);
    server.emit(
      "users",
      active_users.map((u) => u.nickname)
    );
  });
  socket.on("disconnect", () => {
    console.log("disconnected");
    const index = active_users.findIndex((u) => u.id == socket.id);
    if (index < 0) return;
    const nickname = active_users[index].nickname;
    active_users.splice(index, 1);
    socket.broadcast.emit("userLeft", nickname);
    server.emit(
      "users",
      active_users.map((u) => u.nickname)
    );
  });
});
