import React, { useState, useEffect } from "react";
import Input from "./Input";
export default function Chat({ socket }) {
  const [messages, setMessages] = useState([]);
  const send = (message) => {
    socket.emit("message", message);
  };
  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((m) => [...m, data]);
    });
  }, [socket]);
  return (
    <div>
      <ul>
        {messages.map((m) => (
          <li>{m}</li>
        ))}
      </ul>
      <Input send={send} buttonText="Send" />
    </div>
  );
}
