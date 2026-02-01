import { useState } from "react";
import { AppContext } from "./AppContext.jsx";
import { useEffect } from "react";
import { Reservas } from "../ui/Reservas.jsx";

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("prueba");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [modelo, setModelo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [seña, setSeña] = useState("");
  const [reservas, setReservas] = useState([]);
  const [onModalDel, setOnModalDel] = useState(false)
  const [idEliminado, setIdEliminado] = useState("");
  const [idEditado, setIdEditado] = useState("")
  const [onModalEdit, setOnModalEdit] = useState(false)
  const [animationReservas, setAnimationReservas] = useState(false)

  const cargarReservas = () => {
    window.api.getReservas().then(setReservas);
    
  };
  const limpiarFormulario = () => {
    setNombre("");
    setApellido("");
    setModelo("");
    setTelefono("");
    setSeña("");
  };

  useEffect(() => {
    cargarReservas();
    
  }, []);

  const addReserva = async () => {
    const campos = [nombre, apellido, modelo, telefono, seña];
    if (campos.every((campo) => !campo.trim())) {
      return;
    }
    await window.api.addReserva({
      nombre: nombre.trim() || "Sin nombre",
      apellido: apellido.trim() || "Sin apellido",
      modelo: modelo.trim() || "Sin modelo",
      telefono: telefono.trim() || "Sin teléfono",
      seña: seña.trim() || "Sin seña",
    });

    cargarReservas();
    limpiarFormulario();
  };


  const openModalDel = (data) => {
    setOnModalDel(true)
    setIdEliminado(data);
    console.log(data, "la data para borrar")
  }

  const delReservas = async (id) => {
    await window.api.delReserva(id).then(() => {
      setReservas((prev) => prev.filter((reserva) => reserva.id !== id));
    });
    setOnModalDel(false)
  };

  const openModalEdit = (data) => {
    setOnModalEdit(true)
    setIdEditado(data);
    console.log(data, "La data de la reserva para editar")
  }

  const editReservas = async(reserva) => {
    await window.api.editReserva(reserva)
    
    cargarReservas()
    setOnModalEdit(false)
  }
  const capitalizarPalabras = (texto) => {
    if (!texto) return "";
    return texto
      .toLowerCase()
      .split(" ")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");
  };

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
    addReserva,
    reservas,
    setReservas,
    delReservas,
    capitalizarPalabras,
    editReservas,
    idEditado,
    setIdEditado,
    openModalEdit,
    onModalEdit,
    onModalDel,
    setOnModalDel,
    openModalDel,
    idEliminado,
    setIdEliminado,
    animationReservas,
    setAnimationReservas,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
