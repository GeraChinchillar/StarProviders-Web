import React from 'react';

import Modal from 'react-bootstrap/Modal';

export default function Modales({open, children, onClose, title, foot}){
  if(!open) return null
  return(
    <>
      <Modal className='modal-product' show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          {foot}
        </Modal.Footer>
      </Modal>
    </>
  )
}