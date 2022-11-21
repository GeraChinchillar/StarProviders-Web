import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


export const Manual = (props) => {
    const { manual } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='col-md-5 box-shadow oneManual '>
            <button className='card colorManual' variant="primary" onClick={handleShow}>
                <div className='card-body-manual text-center text-wrap'>
                    <h4 className='card-title-manual'>{manual.name}</h4>
                    <p className="card-text-autor">{manual.userName}</p>
                    <img src={manual.urlImage} className= 'manual-img' alt='manual'></img>
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
                            <di className='manual-modal-initial'>
                                <img className='manual-modal-img' src={manual.urlImage} width="200px" alt='manual'></img>
                                <p className='manual-text-autor'><b>Autor: </b>{manual.userName}</p>
                            </di>
                        </div>
                        <div >
                            <p className='manual-desc'>{manual.description}</p>
                            <ul>
                                <h5>Procedimiento</h5>
                                <p className='list-manual'>{manual.step.map((oneStep) => <li key={oneStep}>{oneStep}</li>)}</p>
                                
                            </ul>
                            <ul>
                                <h5>Productos</h5>
                                <p className='list-manual'>{manual.materials.map((material) => <li key={material}>{material}</li>)}</p>
                                
                            </ul>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}