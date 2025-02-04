import { createContext } from "react";

export const UserContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
  setUser: () => {},
  userAppointments: [],
  setUserAppointments: () => {},
  fetchUserAppointments: () => {}, // Nueva función para actualizar las citas desde el backend
});


