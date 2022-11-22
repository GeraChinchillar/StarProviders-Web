import React, { useState } from 'react';
import '../../../App.css';
import Modal from 'react-bootstrap/Modal';

export const Providers = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { provider } = props
  console.log({ provider });

  return (
    <div className='col-md-3 box-shadow oneProduct'>
      <button className='colorManual' variant="primary" onClick={handleShow}>
      <div className='card-body'>
          <img src={provider.urlLogo} className='provider-img' alt='product'></img>
          <h4 className='card-title-product'>{provider.name}</h4>
          <p className='card-text-product'><b>Ubicación:</b> {provider.cityName}</p>
        </div>
      </button>
      <div>
        <Modal className='modal-provider modal-dialog-centered modal-md' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>{provider.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className='card-img-p ' src={provider.urlLogo} alt='providers'/>
            <p><a href={provider.site} className='provider-link'>Página de {provider.name}</a></p>
            <p><a href={provider.urlLocation} className='provider-link'>Ubicación</a></p>
            <p className='card-text-provider'><b>Ubicación:</b> {provider.cityName}</p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}
