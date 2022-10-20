import '../../../App.css';
import React, { useState } from 'react';
import Modales from "../../commons/Modales";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Product = (props) => {
    const [isOpen,setIsOpen] = useState(false)
    const {product} = props  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return(
      <div className='col-md-4 box-shadow oneProduct'>

        <button className='card' variant="primary" onClick={handleShow}>
          <div className='card-body'> 
            <img src={product.url} width="200px"></img>
            <h5 className='card-title'>{product.name}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </button>


        <div className='modales'>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className='title'>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={product.url} width="200px" className='url'/>
              <p className='mb-1'>{product.description}</p>
              <p className='mb-1'> <b>Precio:</b> ${product.price}</p>
              <p className='mb-1'><b>Proveedor: </b>{product.provider}</p>
              <p className='mb-1'><b>Categoría: </b>{product.category}</p>
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


