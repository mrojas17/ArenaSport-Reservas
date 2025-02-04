import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
    }
  });
  const [userAppointments, setUserAppointments] = useState([]);

  const fetchUserAppointments = async () => {
    try {
      if (!user?.id) return;
  
      const response = await axios.get(`http://localhost:3000/users/${user.id}`);
      
      if (response.status === 200 && Array.isArray(response.data.appointments)) {
        setUserAppointments([...response.data.appointments]); 
      } else {
        console.error("Error: Los datos de citas no son un array válido.");
      }
    } catch (error) {
      console.error(" Error al obtener citas:", error);
    }
  };
  

 
  useEffect(() => {
    if (user && user.appointments) {
      setUserAppointments([...user.appointments]); 
    } else {
      setUserAppointments([]); 
    }
  }, [user]);  


  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    console.log("🔄 Usuario actualizado en contexto:", user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        userAppointments,
        setUserAppointments,
        fetchUserAppointments, 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
