import React, { useState } from 'react';
import Modales from "../../commons/Modales";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Product = (props) => {
    const [isOpen,setIsOpen] = useState(false)
    const {product} = props  
    console.log({product});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
      <div className='col-md-4 box-shadow'>
        <button className='card w-75' variant="primary" onClick={handleShow}>
          <div className='card-body'> 
            <h5 className='mb-1'>{product.name}</h5>
            <p className='mb-1'>{product.description}</p>
            <p className='mb-1'>{product.price}</p>
            <p className='mb-1'>{product.provider}</p>
            <p className='mb-1'>{product.category}</p>
          </div>
        </button>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className='mb-1'>{product.description}</p>
              <p className='mb-1'>{product.price}</p>
              <p className='mb-1'>{product.provider}</p>
              <p className='mb-1'>{product.category}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
}


