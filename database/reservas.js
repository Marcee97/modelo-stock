const { ipcMain } = require("electron");
const db = require("./database.js");

ipcMain.handle("add-reserva", (event, reserva) => {
  const result = db
    .prepare(
      "INSERT INTO reservas (nombre, apellido, modelo,telefono, sena) VALUES (?, ?,?, ?, ?)",
    )
    .run(
      reserva.nombre,
      reserva.apellido,
      reserva.modelo,
      reserva.telefono,
      reserva.seña,
    );
  return result;
});
ipcMain.handle("get-reservas", () => {
  const reservas = db.prepare("SELECT * FROM reservas").all();
  return reservas;
});

ipcMain.handle("del-reserva", (event, id) => {
  const result = db.prepare("DELETE FROM reservas WHERE id = ?").run(id)
  return result
});


ipcMain.handle("edit-reserva", (event, reserva) => {
  const result = db.prepare("UPDATE reservas SET nombre = ?, apellido = ?, modelo = ?, telefono = ?, sena = ? WHERE id = ?").run(
    reserva.nombre,
    reserva.apellido,
    reserva.modelo,
    reserva.telefono,
    reserva.sena,
    reserva.id
  );
  return result;
})
module.exports = db;
