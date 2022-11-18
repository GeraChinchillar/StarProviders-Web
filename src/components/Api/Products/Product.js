import React, { useState } from 'react';
import Modales from "../../commons/Modales";
import '../../../App.css';

export const Product = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { product } = props
  console.log({ product });

  return (
    <div className='col-md-3 box-shadow oneProduct'>
      <button className='colorManual' variant="primary" onClick={() => setIsOpen(true)}>
        <div className='card-body'>
          <img src={product.url} className='product-img' alt='product'></img>
          <h5 className='card-title-product'>{product.name}</h5>
          <p className='card-text-product'><b>Proveedor:</b> {product.provider}</p>
          <p className='card-text-product'><b>Categoria:</b>{product.category}</p>
          <p className='card-text-precio'> ${product.price}</p>
        </div>
      </button>
      <div>
        <Modales open={isOpen} onClose={() => setIsOpen(false)} title={product.name} foot={<p className='card-text'>${product.price}</p>}>
          <img class='card-img' src={product.url} alt='product' />
          <p className="card-text">{product.description}</p>
          <p className='card-text'>{product.provider}</p>
          <p className='card-text'>{product.category}</p>
        </Modales>
      </div>
    </div>
  )
}
