import React from "react";

export const Devolucion = () => {
  return (
    <>
    <div class="container-fluid"> 
        <div class="row">
                <div class="col-sm-12 d-flex justify-content-center">
                    <h1 class="text-center">DEVOLUCIONES</h1>.
            </div>
        </div>
    </div>
    <hr></hr>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID Pedido</th>
            <th scope="col">Costo del pedido</th>
            <th scope="col">Fecha del pedido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">13112</th>
            <td>$500.00</td>
            <td>15/07/2024</td>
            <td>
              <button className="btn btn-danger">Solicitar devolución</button>
            </td>
          </tr>
          <tr>
            <th scope="row">44671</th>
            <td>$700.00</td>
            <td>20/06/2024</td>
            <td>
              <button className="btn btn-danger">Solicitar devolución</button>
            </td>
          </tr>
          <tr>
            <th scope="row">57943</th>
            <td>$352.00</td>
            <td>17/02/2024</td>
            <td>
              <button className="btn btn-danger">Solicitar devolución</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
