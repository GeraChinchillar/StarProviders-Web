import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Manual = (props) => {
    const { manual } = props
    console.log({ Manual });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='col-md-5 box-shadow oneManual '>
            <button className='card' class='colorManual' variant="primary" onClick={handleShow}>
                <div className='card-body-manual text-center text-wrap'>
                    <h4 className='card-title-manual'>{manual.name}</h4>
                    <p className="card-text-autor">{manual.user}</p>
                    <img src={manual.url} className= 'manual-img' alt='manual'></img>
                    <h5 className='subtitulos-card-manual'>Descripcion</h5>
                    <p className="card-text-manual">{manual.description}</p>
                </div>
            </button>
            <div>
                <Modal className='modal-manual modal-dialog-centered modal-lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{manual.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='position-relative'>
                            <img className='left ' src={manual.url} width="200px" alt='manual'></img>
                            <p className='relative-f'>{manual.description}</p>
                        </div>
                        <div>
                            <ul>
                                <h5>Procedimiento</h5>
                                {manual.steps.map((step) => <li>{step}</li>)}
                            </ul>
                            <ul>
                                <h5>Productos</h5>
                                {manual.products.map((step) => <li>{step}</li>)}
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="Agregar" variant="secondary" onClick={handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}