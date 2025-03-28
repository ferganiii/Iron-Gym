import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null); // ✅ تأكد من التصدير الصحيح

export default function UserContextProvider(props) {
  const [token, setToken] =useState(localStorage.getItem('token') || null);
  const [user, setUser] =useState(localStorage.getItem('User') || null);
  


  useEffect(() => {
 
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem("user");
    }
  }, [token ,user ]);

  return (
    <UserContext.Provider value={{ token, setToken , user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
