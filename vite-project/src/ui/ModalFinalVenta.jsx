import { useAppContext } from "../context/UseAppContext";
import "../styles/pages/modalFinalVenta.css";

//Poner las dos opciones de confirmar venta, o si se cancela la venta
export const ModalFinalVenta = () => {
  const { openModalFinalVenta, setOpenModalFinalVenta, dataModalFinalVenta, modalFinalVenta, montoPagado, setMontoPagado } =
    useAppContext();
  return (
    <section className="modal-final-venta">
        <h2 className="modal-final-venta__titulo">Completar venta</h2>
      <div className="modal-final-venta__cont">
        {dataModalFinalVenta.map((reserva, index) => (
          <div key={index} className="modal-final-venta__cont-detalles">
             <p className="modal-final-venta__item">
              <span>Fecha Reserva</span> <span title="Año/Mes/Dia">{reserva.fecha_creacion}</span>
            </p>
            <p className="modal-final-venta__item">
              <span>Nombre</span> <span>{reserva.nombre} {reserva.apellido}</span>
            </p>
            <p className="modal-final-venta__item">
              <span>Telefono</span>
              {reserva.telefono}
            </p>
            <p className="modal-final-venta__item">
              <span>Modelo</span>
              {reserva.modelo}
            </p>
            <p className="modal-final-venta__item">
              <span>Seña</span>
              {reserva.sena}
            </p>
            <div className="modal-final-venta__cont-input">

            <p>Pagado</p>
            <input className="modal-final-venta__input" placeholder="Dinero entregado" onChange={(e) => setMontoPagado(e.target.value)}/>
            </div>
            <button className="modal-final-venta__cont-botones-item" onClick={()=> modalFinalVenta(reserva, montoPagado)}>
            Confirmar
          </button>
           <button className="modal-final-venta__cont-botones-item" onClick={() => setOpenModalFinalVenta(false)}>
            Cancelar
          </button>
          </div>
        ))}
        <div className="modal-final-venta__cont-botones">
        </div>
      </div>
    </section>
  );
};
//abrir y cerrar el modal con los botones de confirmar y cancelar