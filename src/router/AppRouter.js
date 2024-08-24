import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contacto from "../componentes/Contacto";
import { Error } from "../componentes/Error";
import Home from "../componentes/Home";
import { Tabla } from "../componentes/Tabla";
import Info from "../componentes/Info";
import { Devolucion } from "../componentes/Devoluciones";
import AltaProducto from "../componentes/AltaProducto";
import Productos from "../componentes/Productos";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/productos" element={<Tabla />} />
        <Route exact path="/devolucion" element={<Devolucion />} />
        <Route exact path="/altaproducto" element={<AltaProducto />} />
        <Route exact path="/listaproductos" element={<Productos />} />
        <Route exact path="/producto/:value" element={<Info />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
