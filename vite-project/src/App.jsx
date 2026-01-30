import { useState } from "react";
import { Reservas } from "./ui/Reservas";
import { AppProvider } from "./context/AppProvider";
import "./styles/pages/app.css";
import { GestionReservas } from "./ui/GestionReservas";

export const App = () => {
 

  return (
    <div className="app">
      <AppProvider>
        <Reservas />
        <GestionReservas/>
      </AppProvider>
    </div>
  );
};
