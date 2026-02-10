import { useAppContext } from "../context/UseAppContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import "../styles/pages/gestionReservas.css";
import { ModalDel } from "./ModalDel";
import { EditModal } from "./EditModal";
import { FaAngleDown } from "react-icons/fa6";
import { ModalVenta } from "./ModalVenta";
import { GestionArchivo } from "../ui/GestionArchivo.jsx";
import { useEffect } from "react";
export const GestionReservas = () => {
  useEffect(() => {
    const el = document.querySelector(".gestion-reservas");
    if (!el) return;

    const handleScroll = () => {
      const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 1;
      el.classList.toggle("show-bottom", !atBottom);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
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
    openCloseReserva,
    setOpenCloseReserva,
    archivoReserva,
    setArchivoReserva,
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
        <h2 className="gestion-reservas__cont-titulos">
          <div className="gestion-reservas__cabecera-reserva-archivo">
            <span className="gestion-reservas__titulo-reservas" onClick={()=> setArchivoReserva("reserva")}>Reservas</span>{" "}
            / <span className="gestion-reservas__titulo-archivo" onClick={()=> setArchivoReserva("archivo")}>Archivo</span>
          </div>
          <span className="gestion-reservas__cantidad">
            Cantidad ({reservas.length})
          </span>
        </h2>
        {archivoReserva === "archivo" && <GestionArchivo />}

        {archivoReserva === "reserva" &&
          reservas.map((reserva, index) => {
            const abierta = openCloseReserva === reserva.id;
            return (
              <div
                className={
                  abierta
                    ? "gestion-reservas__cont-reserva--active"
                    : "gestion-reservas__cont-reserva"
                }
                key={index}
              >
                <div className="gestion-reservas__cont-cabecera">
                  {capitalizarPalabras(reserva.nombre)}{" "}
                  {capitalizarPalabras(reserva.apellido)}{" "}
                  <div className="gestion-reservas__cont-cabecera-fecha">
                    <p className="gestion-reservas__cont-titulo-fecha">
                      fecha:
                    </p>
                    <p className="gestion-reservas__reserva-fecha-hora">
                      {reserva.fecha_creacion}
                    </p>
                    <p
                      className="gestion-reservas__icon-down"
                      onClick={() =>
                        setOpenCloseReserva(abierta ? null : reserva.id)
                      }
                    >
                      <FaAngleDown />
                    </p>
                  </div>
                </div>
                <p className="gestion-reservas__detalle">
                  <span>Modelo</span>
                  {capitalizarPalabras(reserva.modelo)}
                </p>
                <p className="gestion-reservas__detalle">
                  <span>Telefono</span>
                  {capitalizarPalabras(reserva.telefono)}
                </p>
                <p className="gestion-reservas__detalle">
                  <span>Seña</span>
                  {reserva.sena}
                </p>
                <div className="gestion-reservas__cont-icons">
                  <AiTwotoneDelete
                    onClick={() => {
                      openModalDel(reserva);
                      setGestionDesactive(true);
                    }}
                  />
                  <FaHandshake onClick={() => openModalVenta(reserva)} />
                  <MdEdit
                    onClick={() => {
                      openModalEdit(reserva);
                      setGestionDesactive(true);
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
