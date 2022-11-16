import '../../App.css'
import React, {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function FloatingActionButtons() {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div>
            <div>
                <div class='contenedor' >
                    <button class='botonF1' onClick={()=>setIsOpen(true)}>
                        <span>+</span>
                    </button>
                </div>
                <div className='modales'>
                    <Modal show={isOpen} onHide={()=> setIsOpen(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id="addForm">
                                <input type="text" name="name" placeholder="Nombre" id='1d'/>
                                <br/><br/>
                                <input type="text" placeholder="description" name="Descripcion" id='2d'/>
                                <br/><br/>
                                <input type="text" placeholder="price" name="Precio" id='3d'/>
                                <br/><br/>
                                <input type="text" placeholder="provider" name="Proveedor" id='4d'/>
                                <br/><br/>
                                <input type="text" placeholder="category" name="Categoria" id='5d'/>
                                <br/><br/>
                                <input type="text" placeholder="url" name="URL" id='6d'/>
                                <br/><br/>        
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button class="Agregar" variant="secondary" onClick={()=> setIsOpen(false)}>Add</Button>
                        </Modal.Footer>
                    </Modal>
            </div>
        </div> 
      </div>
    );

}