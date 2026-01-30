import { useAppContext } from "../context/UseAppContext.jsx";
import "../styles/pages/reservas.css";
export const Reservas = () => {

const {setNombre, setApellido, setModelo,setTelefono, setSeña, mostrarReserva} = useAppContext();


  return (
    <>
    <section className="reservas">
        <div className="reservas__cont">
            <input type="text" placeholder="Nombre" onChange={(e)=> setNombre(e.target.value)}/>
            <input type="text" placeholder="Apellido" onChange={(e)=> setApellido(e.target.value)}/>
            <input type="text" placeholder="Modelo" onChange={(e)=> setModelo(e.target.value)}/>
            <input type="number" placeholder="Telefono" onChange={(e)=> setTelefono(e.target.value)}/>
            <input type="number" placeholder="Seña" onChange={(e)=> setSeña(e.target.value)}/>
        </div>
        <button onClick={mostrarReserva}>Registrar</button>
    </section>
    </>
  )
}
