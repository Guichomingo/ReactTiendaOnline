import React from 'react'
import Searchbar from './Searchbar';
import { Boton } from './Boton';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Tienda online
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listaproductos">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/altaproducto">
                Alta Producto
              </a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="/contacto">
                Contacto
              </a>
            </li>*/}
            {/*<li className="nav-item">
              <a className="nav-link" href="/devolucion">
                Devoluciones
              </a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
          <Searchbar/>
          <Boton nombre='Buscar'/>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar