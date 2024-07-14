import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Bloque } from "./componentes/Bloque";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { AppRouter } from "./router/AppRouter";
import { Tabla } from "./componentes/Tabla";
import { useFetchApiImagen } from "./componentes/hooks/useFetchApiImagen";

function App() {



  return (
    <>
      <Navbar />
      <AppRouter/>
      <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
