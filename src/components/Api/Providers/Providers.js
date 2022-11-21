import React, { useState } from 'react';
import Modales from "../../commons/Modales";
import '../../../App.css';

export const Providers = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { provider } = props
  console.log({ provider });

  return (
    <div className='col-md-3 box-shadow oneProduct'>
      <button className='colorManual' variant="primary" onClick={() => setIsOpen(true)}>
      <div className='card-body'>
          <img src={provider.urlLogo} className='provider-img' alt='product'></img>
          <h4 className='card-title-product'>{provider.name}</h4>
          <p className='card-text-product'><b>Ubicación:</b> {provider.cityName}</p>
        </div>
      </button>
      <div>
        <Modales open={isOpen} onClose={() => setIsOpen(false)} title={provider.name}>
          <img className='card-img provider-img' src={provider.urlLogo} alt='providers'/>
          <a href={provider.site} className='provider-link'>Página de Walmart</a>
          <a href={provider.urlLocation} className='provider-link'>Ubicación</a>
          <p className='card-text-product'><b>Ubicación:</b> {provider.cityName}</p>
        </Modales>
      </div>
    </div>
  )
}
