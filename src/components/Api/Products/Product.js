import React, { useState } from 'react';
import Modales from "../../commons/Modales";
import '../../../App.css';

export const Product = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { product } = props
  console.log({ product });

  return (
    <div className='col-md-3 box-shadow oneProduct'>
      <button className='card' class='productBox' variant="primary" onClick={() => setIsOpen(true)}>
        <div className='card-body'>
          <img src={product.url} width="40%"></img>
          <h6 className='card-title'>{product.name}</h6>
          <p className="card-text">{product.description}</p>
          <p className='card-text'>${product.price}</p>
          <p className='card-text'>{product.provider}</p>
          <p className='card-text'>{product.category}</p>
        </div>
      </button>
      <div>
        <Modales open={isOpen} onClose={() => setIsOpen(false)} title={product.name} foot={<p className='card-text'>${product.price}</p>}>
          <img class='card-img' src={product.url} />
          <p className="card-text">{product.description}</p>
          <p className='card-text'>{product.provider}</p>
          <p className='card-text'>{product.category}</p>
        </Modales>
      </div>
    </div>
  )
}
