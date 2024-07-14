import React, { useEffect, useState } from "react";
import { Boton } from "./Boton";

export const Tabla = () => {
  const [contadorUno, setContadorUno] = useState(0);
  const [contadorDos, setContadorDos] = useState(0);
  const [contadorTres, setContadorTres] = useState(0);
  const [contadorCuatro, setContadorCuatro] = useState(0);
  const [contadorCinco, setContadorCinco] = useState(0);
  var idUno = 1;
  let idDos = 2;
  let idTres = 3;
  let idCuatro = 4;
  let idCinco = 5;
  let costoUno = 10;
  let costoDos = 80;
  let costoTres = 20;
  let costoCuatro = 100;
  let costoCinco = 1;
  const [total, setTotal] = useState(0);

  const handleClick = () => { 
    setContadorUno(0); 
    setContadorDos(0); 
    setContadorTres(0); 
    setContadorCuatro(0); 
    setContadorCinco(0); 
}; 

  useEffect(() => {
    setTotal(
      contadorUno * costoUno +
        contadorDos * costoDos +
        contadorTres * costoTres +
        contadorCuatro * costoCuatro +
        contadorCinco * costoCinco
    );
  }, [contadorUno]);

  useEffect(() => {
    setTotal(
      contadorUno * costoUno +
        contadorDos * costoDos +
        contadorTres * costoTres +
        contadorCuatro * costoCuatro +
        contadorCinco * costoCinco
    );
  }, [contadorDos]);

  useEffect(() => {
    setTotal(
      contadorUno * costoUno +
        contadorDos * costoDos +
        contadorTres * costoTres +
        contadorCuatro * costoCuatro +
        contadorCinco * costoCinco
    );
  }, [contadorTres]);

  useEffect(() => {
    setTotal(
      contadorUno * costoUno +
        contadorDos * costoDos +
        contadorTres * costoTres +
        contadorCuatro * costoCuatro +
        contadorCinco * costoCinco
    );
  }, [contadorCuatro]);

  useEffect(() => {
    setTotal(
      contadorUno * costoUno +
        contadorDos * costoDos +
        contadorTres * costoTres +
        contadorCuatro * costoCuatro +
        contadorCinco * costoCinco
    );
  }, [contadorCinco]);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Imagen</th>
          <th scope="col">Costo</th>
          <th scope="col">Información</th>
          <th scope="col"># En carrito</th>
          <th scope="col">Añadir</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Bolsa</td>
          <td>
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              class="rounded float-start"
              alt="..."
              width={100}
              height={100}
            />
          </td>
          <td>${costoUno}.00</td>
          <td>
            <a href={"/producto/" + idUno}>
              <button className="btn btn-warning">Info</button>
            </a>
          </td>
          <td>{contadorUno}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => setContadorUno(contadorUno + 1)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setContadorUno(contadorUno - 1)}
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Playera blanca</td>
          <td>
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              class="rounded float-start"
              alt="..."
              width={100}
              height={100}
            />
          </td>
          <td>${costoDos}.00</td>
          <td>
            <a href={"/producto/" + idDos}>
              <button className="btn btn-warning">Info</button>
            </a>
          </td>
          <td>{contadorDos}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => setContadorDos(contadorDos + 1)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setContadorDos(contadorDos - 1)}
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Chaqueta</td>
          <td>
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              class="rounded float-start"
              alt="..."
              width={100}
              height={100}
            />
          </td>
          <td>${costoTres}.00</td>
          <td>
            <a href={"/producto/" + idTres}>
              <button className="btn btn-warning">Info</button>
            </a>
          </td>
          <td>{contadorTres}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => setContadorTres(contadorTres + 1)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setContadorTres(contadorTres - 1)}
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Playera azul</td>
          <td>
            <img
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              class="rounded float-start"
              alt="..."
              width={100}
              height={100}
            />
          </td>
          <td>${costoCuatro}.00</td>
          <td>
            <a href={"/producto/" + idCuatro}>
              <button className="btn btn-warning">Info</button>
            </a>
          </td>
          <td>{contadorCuatro}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => setContadorCuatro(contadorCuatro + 1)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setContadorCuatro(contadorCuatro - 1)}
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Anillo</td>
          <td>
            <img
              src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
              class="rounded float-start"
              alt="..."
              width={100}
              height={100}
            />
          </td>
          <td>${costoCinco}.00</td>
          <td>
            <a href={"/producto/" + idCinco}>
              <button className="btn btn-warning">Info</button>
            </a>
          </td>
          <td>{contadorCinco}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => setContadorCinco(contadorCinco + 1)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setContadorCinco(contadorCinco - 1)}
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Costo Total</td>
          <td>${total}.00</td>
          <td>
            <Boton nombre="Comprar" />
            <br></br>
            <button onClick={handleClick} className="btn btn-danger">Vaciar Carrito</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
