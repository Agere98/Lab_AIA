import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Input from "./components/Input";
const socket = io("http://localhost:3000");
export default function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((m) => [...m, data]);
    });
  }, []);
  const send = (message) => {
    socket.emit("message", message);
  };
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
