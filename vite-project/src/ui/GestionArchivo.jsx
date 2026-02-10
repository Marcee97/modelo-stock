import { useAppContext } from "../context/UseAppContext";
import "../styles/pages/gestionArchivos.css";
import { FaAngleDown } from "react-icons/fa6";

export const GestionArchivo = () => {
  const { archivos, cargarArchivos, capitalizarPalabras } = useAppContext();
  console.log(archivos, "desde gestion archivos front");
  return (
    <section className="gestion-archivos">
      <div className="gestion-archivos__cont">
        <nav className="gestion-archivos__menu">
          <ul className="gestion-archivos__menu-list">
            <li className="gestion-archivos__menu-item">Todos</li>
            <li className="gestion-archivos__menu-item">Vendidos</li>
            <li className="gestion-archivos__menu-item">Cancelados</li>
          </ul>
        </nav>
        <div className="gestion-archivos__cont-archivos">
          {archivos.map((archivo, index) => (
            <div className="gestion-archivos__archivo" key={index}>
              <h3 className="gestion-archivos__archivo-titulo">
                <span onClick={() => cargarArchivos()}>
                  {capitalizarPalabras(archivo.nombre)}{" "}
                  {capitalizarPalabras(archivo.apellido)}
                </span>{" "}
                <span className="gestion-archivos__archivo-titulo-btn">
                  Vendido <FaAngleDown />
                </span>
              </h3>
              <p className="gestion-archivos__archivo-item">
                Pago <span>{archivo.pago}</span>
              </p>
              <p className="gestion-archivos__archivo-item">
                Seña <span>{archivo.sena}</span>
              </p>
              <p className="gestion-archivos__archivo-item">
                Fecha <span>{archivo.fecha_reserva}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
