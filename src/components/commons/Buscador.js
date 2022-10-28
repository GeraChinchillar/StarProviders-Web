import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../commons/App.css'
import React, {useState, useEffect } from 'react';


const LookFor = ({peticionGet1, products1, setProducts1}) => {

      // Buscador
  const [busqueda, setBusqueda]= useState("");
  const Buscar=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);

    if(e.target.value.length ===0){
      peticionGet1();
    }
  }

  const filtrar=(terminoBusqueda)=>{
      var result = products1.filter((elemento)=>{
        if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
          return elemento;
        }});
        setProducts1(result);
           
  };

    return (
        <div>
          <div className="buscador">
            <input
              className="form-control inputBuscar"
              value= {busqueda}
              placeholder="Búscar por nombre"
              onChange={Buscar}
            />
          </div>
        </div>
      );

}

export default LookFor;