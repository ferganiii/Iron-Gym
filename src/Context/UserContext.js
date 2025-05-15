import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const role = user?.role || "User"; 
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [token, user]);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser, role }}>
      {children}
    </UserContext.Provider>
  );
}
