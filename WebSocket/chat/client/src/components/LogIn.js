import React, { useState, useEffect } from "react";
import Input from "./Input";
export default function LogIn({ socket }) {
  const [error, setError] = useState("");
  const login = (nickname) => {
    socket.emit("login", nickname);
  };
  useEffect(() => {
    socket.on("err", (message) => {
      setError(message);
    });
  }, [socket]);
  return (
    <div>
      <h1>Choose your nickname</h1>
      <Input send={login} buttonText="Enter chat" />
      {error ? error : ""}
    </div>
  );
}
