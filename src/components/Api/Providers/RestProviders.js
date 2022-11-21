import '../../../App.css';
import React, { useState, useEffect } from 'react';
import { Providers } from './Providers';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LookFor from '../../commons/Buscador';

function RestProviders() {
  const urlProviders = 'https://startproviders.uc.r.appspot.com/api/providers'
  const [providers, setProviders] = useState()

  const peticionGet = async () => {
    await axios.get(urlProviders)
      .then(response => {
        setProviders(response.data);
      }).catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div>

      {<LookFor
        peticionGet1={peticionGet}
        providers1={providers}
        setProviders1={setProviders}
        Title ={<h1 className="TitleProduct">Proveedores</h1>}
      />}


      <div className='container d-flex justify-content-center align-items-center products'>
        <div className='row'>
          {!providers ? 'Cargando...' :
            providers.map((provider) => <Providers key={provider.id} provider={provider} />)
          }
        </div>
      </div>
    </div>
  );
}

export default RestProviders;
