import { createContext, useState } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Anshu",
    role: "React Student",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };