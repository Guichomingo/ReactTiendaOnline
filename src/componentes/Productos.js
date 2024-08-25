import React, { useEffect, useState } from "react";
import Eliminar from "./Eliminar";

function Productos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch('https://fakestoreapi.com/products') //API pública gratuita de ejemplo
    //fetch("http://localhost:8080/products")
    fetch("https://products-production-33f4.up.railway.app/products")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripción</th>
          <th>Información</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td class="text-center">
              <img
                src={item.imagen}
                class="text-center"
                alt="..."
                width={120}
                height={120}
              />
              <br />
              <small>{item.name}</small>
            </td>
            <td>${item.precio}</td>
            <td>
              <small>{item.description}</small>
            </td>
            <td>
              <a href={"/producto/" + item.id}>
                <button className="btn btn-warning">Info</button>
              </a>
            </td>
            <td>
              <Eliminar id={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Productos;
