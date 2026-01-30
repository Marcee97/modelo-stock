import { useState } from "react";
import { AppContext } from "./AppContext.jsx";
import { useEffect } from "react";
import { Reservas } from "../ui/Reservas.jsx";

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("prueba");
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [modelo, setModelo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [seña, setSeña] = useState("")
const [reservas, setReservas] = useState([])

  const mostrarReserva = ()=> {

    window.api.addReserva({
      nombre,
      apellido,
      modelo,
      telefono,
      seña
    })

    console.log(nombre, apellido, modelo, seña)
  }

useEffect(() => {
window.api.getReservas().then((reservas) => {
  setReservas(reservas)
  console.log(reservas)
})
}, [])
  const value = {
    theme,
    setTheme,
    nombre,
    setNombre,
    apellido,
    setApellido,
    modelo,
    telefono,
    setTelefono,
    setModelo,
    seña,
    setSeña,
    mostrarReserva,
    reservas,
    setReservas
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
