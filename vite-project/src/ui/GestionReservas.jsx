import { useAppContext } from "../context/UseAppContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import "../styles/pages/gestionReservas.css";
export const GestionReservas = () => {
  const { reservas, setReservas } = useAppContext();
  return (
    <section className="gestion-reservas">
      <div className="gestion-reservas__cont">
        {reservas.map((reserva, index) => (
          <div className="gestion-reservas__cont-reserva">
            <p key={index}>
              {reserva.nombre} {reserva.apellido} {reserva.telefono}{" "}
              {reserva.modelo} {reserva.seña}
            </p>
            <div className="gestion-reservas__cont-icons">

            <AiTwotoneDelete />
            <FaHandshake />
            <MdEdit />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
