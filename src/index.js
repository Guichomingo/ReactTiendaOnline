import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { AppRouter } from "./router/AppRouter";

function App() {



  return (
    <>
      <Navbar />
      <AppRouter/>
      <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
