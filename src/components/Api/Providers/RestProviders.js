import '../../../App.css';
import React, { useState, useEffect } from 'react';
import { Providers } from './Providers';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LookFor from '../../commons/Buscador';

function RestProviders() {
  const urlProviders = 'https://private-894052-starproviders.apiary-mock.com/products'
  const [providers, setProviders] = useState()

  const peticionGet = async () => {
    await axios.get(urlProviders)
      .then(response => {
        setProviders(response.data);
      }).catch(error => {
        console.log(error);
      })
  };

  setTimeout(() => {
    const btn = document.querySelector('#botoncito');
    btn.addEventListener('click', e => {

      var NewProvider = {
        name: document.getElementById("1d").value,
        description: document.getElementById("2d").value,
        price: document.getElementById("3d").value,
        provider: document.getElementById("4d").value,
        category: document.getElementById("5d").value,
        url: document.getElementById("6d").value
      };

      providers.push(NewProvider);

    });
  }, 2000)

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div>

      {<LookFor
        peticionGet1={peticionGet}
        providers1={providers}
        setProviders1={setProviders}
        Title ={<h1 className="TitleProvider">Proveedores</h1>}
      />}


      <div className='container d-flex justify-content-center align-items-center providers'>
        <div className='row'>
          {!providers ? 'Cargando...' :
            providers.map((provider) => <Providers key={provider.code} provider={provider} />)
          }
        </div>


      </div>
    </div>
  );
}

export default RestProviders;
