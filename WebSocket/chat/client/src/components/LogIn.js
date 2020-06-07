import React from "react";
import Input from "./Input";
export default function LogIn({ socket }) {
  const login = (nickname) => {
    socket.emit("login", nickname);
  };
  return (
    <div>
      <h1>Choose your nickname</h1>
      <Input send={login} buttonText="Enter chat" />
    </div>
  );
}
