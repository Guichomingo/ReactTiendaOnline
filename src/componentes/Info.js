import React, { useEffect, useState } from "react";
import { useFetchApiImagen } from "./hooks/useFetchApiImagen";
import { Bloque } from "./Bloque";
import { useParams } from "react-router";

function Info() {
  const { value } = useParams();
  //let [urlApi, setUrlApi] = useState(value);
  //let { fetchResponse } = useFetchApiImagen(value);
  const [data, setData] = useState([]);

  /*useEffect(() => {
    setUrlApi(urlApi + value);
  }, []);*/

  useEffect(() => {
    // Reemplaza 'data.json' con la ruta a tu archivo JSON
    //fetch('https://fakestoreapi.com/products')
    fetch("https://products-production-33f4.up.railway.app/products/" + value)
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <div class="d-flex justify-content-center">
        <Bloque nombre={data.name} imagenUrl={data.imagen} precio={data.precio} descripcion={data.description}/>
      </div>

    </>
  );
}

export default Info;
