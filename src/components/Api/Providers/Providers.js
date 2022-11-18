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
          <img src={provider.url} className='product-img' alt='product'></img>
          <h4 className='card-title-product'>{provider.name}</h4>
          <p className='card-text-product'><b>Proveedor:</b> {provider.provider}</p>
          <p className='card-text-product'><b>Categoria:</b>{provider.category}</p>
          <p className='card-text-precio'> ${provider.price}</p>
        </div>
      </button>
      <div>
        <Modales open={isOpen} onClose={() => setIsOpen(false)} title={provider.name} foot={<p className='card-text'>${provider.price}</p>}>
          <img className='card-img' src={provider.url} alt='providers'/>
          <p className="card-text">{provider.description}</p>
          <p className='card-text'>{provider.provider}</p>
          <p className='card-text'>{provider.category}</p>
        </Modales>
      </div>
    </div>
  )
}
