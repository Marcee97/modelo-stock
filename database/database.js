const Database = require("better-sqlite3");
const path = require("path");
const { app } = require("electron");

const dbPath = path.join(app.getPath("userData"), "local.db");
const db = new Database(dbPath);
db.exec(`
  

  CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    modelo TEXT NOT NULL,
    telefono TEXT,
    sena INTEGER NOT NULL,

    fecha_creacion DATE DEFAULT (date('now','localtime')),
    hora_creacion  TIME DEFAULT (time('now','localtime'))
  );
`);



module.exports = db;