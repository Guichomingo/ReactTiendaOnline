import React from "react";
import { Boton } from "./Boton";

export function Bloque({ nombre, imagenUrl }) {
  return (

    <>
      <section className="py-5">
  <div className="container">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
            <img width={300} height={300}
              className="rounded-4 fit"
              src={imagenUrl}
            />
        </div>
        {/* thumbs-wrap.// */}
        {/* gallery-wrap .end// */}
      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-dark">
            {nombre}<br />
          </h4>
          <h4 className="title text-dark">
            Precio $<br />
          </h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Urna nunc id cursus metus aliquam eleifend mi. Tristique risus nec feugiat in fermentum. Pulvinar sapien et ligula ullamcorper. 
          </p>

          <hr />
          <div className="row mb-4">
            <div className="col-md-4 col-6">
              <label className="mb-2">Tamaño</label>
              <select
                className="form-select border border-secondary"
                style={{ height: 35 }}
              >
                <option>Pequeño</option>
                <option>Mediano</option>
                <option>Grande</option>
              </select>
            </div>
            {/* col.// */}
            <div className="col-md-4 col-6 mb-3">
              <label className="mb-2 d-block">Cantidad</label>
              <div className="input-group mb-3" style={{ width: 170 }}>
                <button
                  className="btn btn-white border border-secondary px-3"
                  type="button"
                  id="button-addon1"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fas fa-minus" />
                </button>
                <input
                  type="text"
                  className="form-control text-center border border-secondary"
                  placeholder={1}
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <button
                  className="btn btn-white border border-secondary px-3"
                  type="button"
                  id="button-addon2"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>
          </div>
            <Boton nombre="Comprar"></Boton>
          <a href="#" className="btn btn-warning shadow-0">
            {" "}
            <i className="me-1 fa fa-shopping-basket" /> Añadir al carrito{" "}
          </a>
        </div>
      </main>
    </div>
  </div>
</section>


      </>
   
  );
}
