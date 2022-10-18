import React, { useState } from 'react';
import Modal from "../../commons/Modal";
export const Product = (props) => {
    const [isOpen,setIsOpen] = useState(false)
    const {product} = props  
    console.log({product});

    const BUTTON_WRAPPER_STYLES = {
      position: 'relative',
      zIndex:1
    }
    return(
      <div className='col-md-4 box-shadow'>
        <button className='card w-75' onClick={() => setIsOpen(true)}>
          <div className='card-body'> 
            <h5 className='mb-1'>{product.name}</h5>
            <p className='mb-1'>{product.description}</p>
            <p className='mb-1'>{product.price}</p>
            <p className='mb-1'>{product.provider}</p>
            <p className='mb-1'>{product.category}</p>
          </div>
        </button>
        <div style={BUTTON_WRAPPER_STYLES}>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <h5 className='mb-1'>{product.name}</h5>
            <p className='mb-1'>{product.description}</p>
            <p className='mb-1'>{product.price}</p>
            <p className='mb-1'>{product.provider}</p>
            <p className='mb-1'>{product.category}</p>
          </Modal>
        </div>
        
      </div>
    )
}


