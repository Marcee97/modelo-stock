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

ipcMain.handle("venta-reserva", (event, reserva) => {
  try {

    const result = db.prepare("INSERT INTO archivos (nombre, apellido, modelo, telefono, sena,monto_pagado, estado ,fecha_reserva, hora_reserva) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)").run(
      reserva.nombre,
      reserva.apellido,
      reserva.modelo,
      reserva.telefono,
      reserva.sena,
      reserva.montoPagado,
      reserva.estado,
      reserva.fecha_creacion,
      reserva.hora_creacion,
    )
    console.log(reserva.id, "el id para eli,minar")
      db.prepare("DELETE FROM reservas WHERE id = ?").run(reserva.id);

    return { success: true, id : result.lastInsertRowid };
  } catch (error) {
    console.error("Error al completar la venta: ", error)
    return { success: false, error: error.message };
  }
})

ipcMain.handle("get-archivos", () => {
  const archivos = db.prepare("SELECT * FROM archivos").all();
  return archivos;
})
module.exports = db;
