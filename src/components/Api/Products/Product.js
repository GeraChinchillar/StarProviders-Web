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
  
    console.log({product});
    return(
      <div className='col-md-4 box-shadow oneProduct'>
        <button className='card' variant="primary" onClick={handleShow}>
          <div className='card-body'> 
            <img src={product.url} width="200px"></img>
            <h5 className='card-title'>{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className='card-text'>${product.price}</p>
            <p className='card-text'>{product.provider}</p>
            <p className='card-text'>{product.category}</p>
          </div>
        </button>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={product.url} width="200px"></img>
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


