import React, { useState } from 'react';
import Modales from "../../commons/Modales";
import '../../../App.css';

export const Product = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { product } = props
  console.log({ product });

  return (
    <div className='col-md-3 box-shadow oneProduct'>
      <button className='card' class='colorManual' variant="primary" onClick={() => setIsOpen(true)}>
        <div className='card-body'>
          <img src={product.url} className='product-img' alt='product'></img>
          <h5 className='card-title-product'>{product.name}</h5>
          <p className='card-text-product'><b>Proveedor:</b> {product.provider}</p>
          <p className='card-text-product'><b>Categoria:</b>{product.category}</p>
          <p className='card-text-precio'> ${product.price}</p>
        </div>
      </button>
      <div>
        <Modales className='modal-product' open={isOpen} onClose={() => setIsOpen(false)} title={product.name} foot={<p className='modal-product-precio'><b>${product.price}</b></p>}>
          <img class='modal-product-img' src={product.url} alt='product' />
          <p className='modal-product-text'> <b>Descripción:</b> {product.description}</p>
          <p className='modal-product-text'> <b>Proveedor:</b> {product.provider}</p>
          <p className='modal-product-text'> <b>Categoria:</b> {product.category}</p>
        </Modales>
      </div>
    </div>
  )
}
