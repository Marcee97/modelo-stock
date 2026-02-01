import "../styles/pages/editmodal.css";
import { useAppContext } from "../context/UseAppContext";
export const EditModal = () => {
  const { editReservas, idEditado, setIdEditado } = useAppContext();
  return (
    <section className="edit-modal">
      <div className="edit-modal__cont">
        <h2>Editar Reserva</h2>
        <div className="edit-modal__cont-inputs">
          {idEditado && (
            <div>
              <input
                type="text"
                value={idEditado.nombre}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, nombre: e.target.value })
                }
              />
                <input
                type="text"
                value={idEditado.apellido}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, apellido: e.target.value })
                }
              />
                <input
                type="text"
                value={idEditado.modelo}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, modelo: e.target.value })
                }
              />
                <input
                type="text"
                value={idEditado.telefono}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, telefono: e.target.value })
                }
              />
              <input
                type="text"
                value={idEditado.sena}
                onChange={(e) =>
                  setIdEditado({ ...idEditado, sena: e.target.value })
                }
              />
        <button onClick={()=> editReservas(idEditado)}>Confirmar</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
