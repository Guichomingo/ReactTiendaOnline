import { useEffect, useState } from "react";

export const useFetchApiImagen = (id) => {
  const [fetchResponse, setFetchResponse] = useState("...");

  useEffect(() => {
    async function fetchRequest() {
      var url = "http://localhost:8080/products/" + id;
      const storedData =
        (await fetch(url, {
            method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
          },
        }).then((response) => {
          JSON.parse(response.data);
        })) || [];
      setFetchResponse(storedData);
    }

    fetchRequest();
  }, [id]);

  return { fetchResponse };
};
