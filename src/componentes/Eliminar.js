import React, { useState } from "react";
import axios from "axios";

function Eliminar({ id }) {
  const [message, setMessage] = useState("");

  const handleDelete = ({ flag }) => {
    axios
      .delete(`https://products-production-33f4.up.railway.app/products/${id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        setMessage("Hubo un error en eliminar el producto.");
        console.error("Hubo un error en eliminar el producto.", error);
      });
  };

  return (
    <div>
      <button onClick={handleDelete} class="btn btn-danger">
        Eliminar
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Eliminar;
