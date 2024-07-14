import React, { useEffect, useState } from "react";
import { useFetchApiImagen } from "./hooks/useFetchApiImagen";
import { Bloque } from "./Bloque";
import { useParams } from "react-router";

function Info() {
  const { value } = useParams();
  let [urlApi, setUrlApi] = useState(value);
  let { fetchResponse } = useFetchApiImagen(value);

  useEffect(() => {
    setUrlApi(urlApi + value);
  }, []);

  console.log(value);

  return (
    <>
      <div class="d-flex justify-content-center">
        <Bloque nombre={"Producto " + value }imagenUrl={fetchResponse} />
      </div>
    </>
  );
}

export default Info;
