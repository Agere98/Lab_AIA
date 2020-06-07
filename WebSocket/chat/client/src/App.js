import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./components/Chat";
import LogIn from "./components/LogIn";
const socket = io("http://localhost:3000");
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    socket.on("loggedIn", () => {
      setLoggedIn(true);
    });
  }, []);
  if (isLoggedIn) {
    return <Chat socket={socket} />;
  } else {
    return <LogIn socket={socket} />;
  }
}
