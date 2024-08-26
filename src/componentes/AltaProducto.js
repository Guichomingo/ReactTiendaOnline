import React, { useState } from "react";

const PostProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    precio: "",
    description: "",
    imagen: "",
    visible: false,
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://products-production-33f4.up.railway.app/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
        },
        body: JSON.stringify(product),
        statusCode: 200,
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Alta de producto</h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit}>
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">
                        Nombre del producto
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">
                        Precio
                      </label>
                      <input
                        type="number"
                        name="precio"
                        value={product.precio}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Descripción
                      </label>
                      <textarea
                        name="description"
                        className="form-control"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">
                        URL de imagen
                      </label>
                      <input
                        type="text"
                        name="imagen"
                        className="form-control"
                        value={product.imagen}
                        onChange={handleChange}
                        placeholder="Imagen URL"
                      />
                    </div>
                    {/*<div className="col-12">
                      <input
                        type="checkbox"
                        name="visible"
                        class="form-check-input"
                        checked={product.visible}
                        onChange={handleChange}
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Visible
                      </label>
                    </div>*/}
                    {(product.visible = true)}
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {response && (
                  <div class="alert alert-success" role="alert">
                    Producto guardado correctamente<br></br>
                    {JSON.stringify(response)}
                  </div>
                )}
                {/*response && <div>Response: {JSON.stringify(response)}</div>*/} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostProduct;
