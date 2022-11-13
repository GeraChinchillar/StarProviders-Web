import "bootstrap/dist/css/bootstrap.min.css";
import '../commons/App.css'
import React, { useState, useEffect } from 'react';


const LookFor = ({ peticionGet1, products1, setProducts1, Title}) => {

  // Buscador
  const [busqueda, setBusqueda] = useState("");
  const Buscar = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);

    if (e.target.value.length === 0) {
      peticionGet1();
    }
  }

  const filtrar = (terminoBusqueda) => {
    var result = products1.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
    });
    setProducts1(result);

  };

  return (
    <div>
      {/* Enviar pagina que se esta mostrando por props */}
      {Title}
      <div className="buscador">
        <input className="form-control Search" value={busqueda} placeholder="Búscar" onChange={Buscar} />
      </div>
    </div>
  );

}

export default LookFor;