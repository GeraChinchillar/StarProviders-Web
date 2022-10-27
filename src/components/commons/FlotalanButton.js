import '../../App.css'
import React, {useState, useEffect } from 'react';
import Modales from "./Modales";
import Button from 'react-bootstrap/Button';

export default function FloatingActionButtons() {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <>
            <div>
                <div class='contenedor' >
                    <button class='botonF1' onClick={()=>setIsOpen(true)}>
                        <span>+</span>
                    </button>
                </div>
                <div className='modales'>
                    <Modales open={isOpen} onClose={()=> setIsOpen(false)} title={"Add Product"} foot={<Button variant="secondary" onClick={()=> setIsOpen(false)}>Close</Button>}>
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
                    </Modales>
            </div>
        </div> 
      </>
    );

}