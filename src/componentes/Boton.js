import React from "react";

export function Boton({nombre}) {
    
  return (
    <button className="btn btn-primary" type="submit">
      {nombre}
    </button>
  )
};
