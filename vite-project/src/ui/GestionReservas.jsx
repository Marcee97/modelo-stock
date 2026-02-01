import { useAppContext } from "../context/UseAppContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import "../styles/pages/gestionReservas.css";
import { ModalDel } from "./ModalDel";
import { EditModal } from "./EditModal";
export const GestionReservas = () => {
  const { reservas, setReservas, delReservas, capitalizarPalabras, openModalEdit, onModalEdit, openModalDel, onModalDel } = useAppContext();
  return (
    <section className="gestion-reservas">
      <h2>Reservas</h2>
      {onModalDel ? <ModalDel/> : null}
      {onModalEdit ? <EditModal/> : null}
      <div className="gestion-reservas__cont">
        {reservas.map((reserva, index) => (
          <div className="gestion-reservas__cont-reserva" key={index}>
            <p>
              {capitalizarPalabras(reserva.nombre)} {capitalizarPalabras(reserva.apellido)}  {capitalizarPalabras(reserva.telefono)}{" "} {capitalizarPalabras(reserva.modelo)}{" "}
              {reserva.sena}
            </p>
            <div className="gestion-reservas__cont-icons">
            <AiTwotoneDelete onClick={()=> openModalDel(reserva)}/>
            <FaHandshake />
            <MdEdit onClick={()=> openModalEdit(reserva)}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
