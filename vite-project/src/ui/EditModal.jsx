import "../styles/pages/editmodal.css";
import { useAppContext } from "../context/UseAppContext";
export const EditModal = () => {
  const { editReservas, idEditado, setIdEditado, onModalEdit, setGestionDesactive } = useAppContext();
  return (
    <section className={onModalEdit ? "edit-modal--active" : "edit-modal"}>
      <div className="edit-modal__cont">
        <h2>Editar Reserva</h2>
          {idEditado && (
            <div className="edit-modal__cont-input">
              <input
                type="text"
                className="edit-modal-input"
                value={idEditado.nombre}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, nombre: e.target.value })
                }
              />
                <input
                type="text"
                 className="edit-modal-input"
                value={idEditado.apellido}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, apellido: e.target.value })
                }
              />
                <input
                type="text"
                 className="edit-modal-input"
                value={idEditado.modelo}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, modelo: e.target.value })
                }
              />
                <input
                type="text"
                 className="edit-modal-input"
                value={idEditado.telefono}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, telefono: e.target.value })
                }
              />
              <input
                type="text"
                 className="edit-modal-input"
                value={idEditado.sena}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, sena: e.target.value })
                }
              />
        <button onClick={()=>{ editReservas(idEditado);
           setGestionDesactive(false)
        }} className="edit-modal__btn-confirmar">Confirmar</button>
            </div>
          )}
      </div>
    </section>
  );
};
