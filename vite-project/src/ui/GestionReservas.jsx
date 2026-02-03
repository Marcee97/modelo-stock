import { useAppContext } from "../context/UseAppContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import "../styles/pages/gestionReservas.css";
import { ModalDel } from "./ModalDel";
import { EditModal } from "./EditModal";
import { ModalVenta } from "./ModalVenta";
import { useEffect } from "react";
export const GestionReservas = () => {
  useEffect(() => {
  const el = document.querySelector('.gestion-reservas');
  if (!el) return;

  const handleScroll = () => {
    const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 1;
    el.classList.toggle('show-bottom', !atBottom);
  };

  el.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => el.removeEventListener('scroll', handleScroll);
}, []);

  const {
    reservas,
    setReservas,
    delReservas,
    capitalizarPalabras,
    openModalEdit,
    onModalEdit,
    openModalDel,
    onModalDel,
    onModalVenta,
    setOnModalVenta,
    openModalVenta,
    gestionDesactive,
    setGestionDesactive,
  } = useAppContext();
  return (
    <section className="gestion-reservas">
      <ModalDel /> 
      <EditModal />
      <ModalVenta />
      <div
        className={
          gestionDesactive
          ? "gestion-reservas__cont--desactive"
          : "gestion-reservas__cont"
        }
        >
        <h2>Reservas</h2>
        {reservas.map((reserva, index) => (
          <div className="gestion-reservas__cont-reserva" key={index}>
            <p>
              {capitalizarPalabras(reserva.nombre)}{" "}
              {capitalizarPalabras(reserva.apellido)}{" "}
              {capitalizarPalabras(reserva.telefono)}{" "}
              {capitalizarPalabras(reserva.modelo)} {reserva.sena}
            </p>
            <div className="gestion-reservas__cont-icons">
              <AiTwotoneDelete onClick={() => {openModalDel(reserva);
                setGestionDesactive(true)
              }} />
              <FaHandshake onClick={() => openModalVenta(reserva)} />
              <MdEdit onClick={() => {openModalEdit(reserva);
                setGestionDesactive(true)
              }
               
              } />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
