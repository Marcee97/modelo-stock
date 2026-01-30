const Database = require("better-sqlite3");
const path = require("path");
const { app } = require("electron");

const dbPath = path.join(app.getPath("userData"), "local.db");
const db = new Database(dbPath);

db.exec(
  `
    CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    modelo TEXT NOT NULL,
    sena INTEGER NOT NULL
    )
  `,
);
try {
  db.exec(`ALTER TABLE reservas ADD COLUMN telefono TEXT`);
  console.log("✔ Columna telefono agregada");
} catch (err) {
  if (err.message.includes("duplicate column name")) {
    console.log("ℹ Columna telefono ya existía");
  } else {
    throw err; // si es otro error real, que explote
  }
}



module.exports = db;