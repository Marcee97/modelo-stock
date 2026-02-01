import "../styles/pages/modaldel.css"
import { useAppContext } from "../context/UseAppContext";
export const ModalDel = () => {
  const { delReservas, idEliminado, setOnModalDel } = useAppContext();
  return (
    <section className="modal-del">
      <div className="modal-del__cont">
        <h2>¿Estás seguro de eliminar esta reserva?</h2>
        {idEliminado && (
          <div>

          <p>{idEliminado.nombre} {idEliminado.apellido} {idEliminado.modelo} {idEliminado.telefono} {idEliminado.sena}</p>
          <button onClick={() => delReservas(idEliminado.id)}>Confirmar</button>
          <button onClick={() => setOnModalDel(false)}>Cancelar</button>
          </div>
        )}
      </div>
    </section>
  )
}
