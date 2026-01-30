const { ipcMain } = require("electron");
const db = require("./database.js");

ipcMain.handle("add-reserva", (event, reserva) => {
  const result = db
    .prepare(
      "INSERT INTO reservas (nombre, apellido, modelo,telefono, sena) VALUES (?, ?,?, ?, ?)",
    )
    .run(reserva.nombre, reserva.apellido, reserva.modelo, reserva.telefono, reserva.seña);
  return result;
});
ipcMain.handle("get-reservas", () => {
    const reservas = db.prepare("SELECT * FROM reservas").all();
    return reservas
})

module.exports = db;
