import React from "react";
import Input from "./Input";
import Messages from "./Messages";
import Users from "./Users";
export default function Chat({ socket }) {
  const send = (message) => {
    socket.emit("message", message);
  };
  return (
    <div>
      <Messages socket={socket} />
      <Input send={send} buttonText="Send" />
      <Users socket={socket} />
    </div>
  );
}
