import "../styles/pages/modaldel.css";
import { useAppContext } from "../context/UseAppContext";
export const ModalDel = () => {
  const {
    delReservas,
    idEliminado,
    onModalDel,
    setOnModalDel,
    setGestionDesactive,
    capitalizarPalabras,
  } = useAppContext();
  return (
    <section className={onModalDel ? "modal-del--active" : "modal-del"}>
      <div className="modal-del__cont">
        <h2 className="modal-del__cont-titulo">
          ¿Estás seguro de eliminar esta reserva?
        </h2>
        {idEliminado && (
          <div className="modal-del__cont-detalle">
            <p className="modal-del__detalle">
              <span>Nombre</span>
              {capitalizarPalabras(idEliminado.nombre)}
            </p>
            <p className="modal-del__detalle">
              <span>Apellido</span>
              {capitalizarPalabras(idEliminado.apellido)}
            </p>
            <p className="modal-del__detalle">
              <span>Modelo</span>
              {capitalizarPalabras(idEliminado.modelo)}
            </p>
            <p className="modal-del__detalle">
              <span>Telefono</span>
              {idEliminado.telefono}
            </p>
            <p className="modal-del__detalle">
              <span>Seña</span>
              {idEliminado.sena}
            </p>
            <div className="modal-del__cont-btns">
              <button
                onClick={() => {
                  setOnModalDel(false);
                  setGestionDesactive(false);
                }}
                className="modal-del__btn-cancelar"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  delReservas(idEliminado.id);
                  setGestionDesactive(false);
                }}
                className="modal-del__btn-confirmar"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
