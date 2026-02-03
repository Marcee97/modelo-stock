import { useEffect } from "react";
import { useAppContext } from "../context/UseAppContext";
import "../styles/pages/modalventa.css";
export const ModalVenta = () => {
  const {
    onModalVenta,
    setOnModalVenta,
    idVenta,
    capitalizarPalabras,
    gestionDesactive,
    setGestionDesactive,
  } = useAppContext();
  useEffect(() => {
    console.log(onModalVenta);
  }, [onModalVenta]);
  return (
    <section className={onModalVenta ? "modal-venta--active" : "modal-venta"}>
      <h2 className="modal-venta__titulo">Completar Compra</h2>
      <div className="modal-venta__cont">
        {idVenta && (
          <div className="modal-venta__cont-detalles">
            <p className="modal-venta__detalle">
              <span>Nombre</span> {capitalizarPalabras(idVenta.nombre)}{" "}
              {capitalizarPalabras(idVenta.apellido)}
            </p>
            <p className="modal-venta__detalle">
              <span>Telefono</span>
              {idVenta.telefono}
            </p>
            <p className="modal-venta__detalle">
              <span>Modelo</span>
              {capitalizarPalabras(idVenta.modelo)}
            </p>
            <p className="modal-venta__detalle">
              <span>Seña</span>
              {idVenta.sena}
            </p>
            <div className="modal-venta__cont-btns">
              <button
                className="modal-venta__btn-volver"
                onClick={() => {
                  setOnModalVenta(false);
                  setGestionDesactive(false);
                }}
              >
                Volver
              </button>
              <button className="modal-venta__btn-confirmar">Confirmar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
