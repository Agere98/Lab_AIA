import React, { useState, useEffect } from "react";
export default function Messages({ socket }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("message", ({ user, message }) => {
      setMessages((m) => [...m, `${user}: ${message}`]);
    });
    socket.on("userJoined", (nickname) => {
      setMessages((m) => [...m, `${nickname} has joined the chat!`]);
    });
    socket.on("userLeft", (nickname) => {
      setMessages((m) => [...m, `${nickname} has left the chat!`]);
    });
  }, [socket]);
  return (
    <ul>
      {messages.map((m) => (
        <li>{m}</li>
      ))}
    </ul>
  );
}
