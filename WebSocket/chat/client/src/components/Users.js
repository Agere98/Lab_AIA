import React, { useState, useEffect } from "react";
export default function Users({ socket }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on("users", (data) => {
      setUsers(data);
    });
  }, [socket]);
  return (
    <div>
      <h1>Active users</h1>
      <ul>
        {users.map((u) => (
          <li>{u}</li>
        ))}
      </ul>
    </div>
  );
}
