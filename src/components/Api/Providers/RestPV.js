import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Providers } from './Providers';
import '../../../App.css';
import '../../commons/Home/Home.css'

function RestPV() {
    const urlProviders = 'https://startproviders.uc.r.appspot.com/api/providers'
    const [providers, setProviders] = useState()

    useEffect(() => {
        const peticionGet = async () => {
            await axios.get(urlProviders)
                .then(response => {
                    setProviders(response.data);
                }).catch(error => {
                    console.log(error);
                })
        };
        peticionGet();
    }, [])

    return(
        <div className='slider-card d-flex align-items-center'>
          {
            !providers ? 'Cargando...' :
            providers.map((provider) =>     
            <div className='slider-card' key={provider.id}>
                <Providers provider={provider} />
            </div>
            )
          }
        </div>
    )
}
export default RestPV;