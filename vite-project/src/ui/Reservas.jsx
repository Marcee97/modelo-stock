import { useAppContext } from "../context/UseAppContext.jsx";
import "../styles/pages/reservas.css";
export const Reservas = () => {
  const {
    nombre,
    setNombre,
    apellido,
    setApellido,
    modelo,
    setModelo,
    telefono,
    setTelefono,
    seña,
    setSeña,
    addReserva,
    animationReservas,
    setAnimationReservas 
  } = useAppContext();

  return (
    <>
      <section className={animationReservas ? "reservas" : "reservas--closed"}>
        <div className="reservas__cont">
          <div className="reservas__cont-cabecera">

          <h2 className="reservas__cont-titulo">Add Reserva</h2>
          <button onClick={() => setAnimationReservas(true)} className={animationReservas ? "reservas__cont-btn-add--active" : "reservas__cont-btn-add"}>Add</button>
          </div>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            className="reservas__cont-input"
          />
          <input
            type="text"
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
            className="reservas__cont-input"
          />
          <input
            type="text"
            placeholder="Modelo"
            onChange={(e) => setModelo(e.target.value)}
            value={modelo}
            className="reservas__cont-input"
          />
          <input
            type="number"
            placeholder="Telefono"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
            className="reservas__cont-input"
          />
          <input
            type="number"
            placeholder="Seña"
            onChange={(e) => setSeña(e.target.value)}
            value={seña}
            className="reservas__cont-input"
          />
          <div className="reservas__cont-btns">

            <button className="reservas__cont-btn-cancelar" onClick={()=> setAnimationReservas(false)}>Cancelar</button>
            <button onClick={addReserva} className="reservas__cont-btn-registrar">Registrar</button>
          </div>

        </div>
      
      </section>
    </>
  );
};
