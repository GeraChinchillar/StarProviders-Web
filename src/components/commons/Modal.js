import React, {Component} from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    border: '3px solid red'
}

export default function Modal({open, children, onClose}){
  if (!open) return null

  return ReactDom.createPortal(
    <>    
        <div style = {MODAL_STYLES}>
            <button onClick={onClose}>X</button>
            {children}
        </div>
    </>,
    document.getElementById('portal')
  )
}