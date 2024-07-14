import { useEffect, useState } from "react";

export const useFetchApiImagen = (id) => {

    const [fetchResponse, setFetchResponse] = useState('...');

    useEffect(() => {

        const fetchRequest = async () => {
            let respuesta = await fetch("https://fakestoreapi.com/products/" + id);
            let datos = await respuesta.json();
            setFetchResponse(datos.image);   
            console.log(datos.image);  
        }

        fetchRequest();
    }, [id])

    return {fetchResponse}
}