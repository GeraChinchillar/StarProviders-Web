import '../../../App.css';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LookFor from '../../commons/Buscador'
import { Manual } from './Manual';

function RestManuals() {
    const urlManuals = 'https://private-894052-starproviders.apiary-mock.com/manuels'
    const [manuals, setManuals] = useState()
    const [isOpen,setIsOpen] = useState(false)

    const peticionGet = async () => {
        await axios.get(urlManuals)
            .then(response => {
                setManuals(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    setTimeout(() => {
        const btn = document.querySelector('#botoncito');
        btn.addEventListener('click', e => {

            var NewManual = {
                name: document.getElementById("1d").value,
                description: document.getElementById("2d").value,
                price: document.getElementById("3d").value,
                provider: document.getElementById("4d").value,
                category: document.getElementById("5d").value,
                url: document.getElementById("6d").value
            };

            manuals.push(NewManual);

        });
    }, 2000)



    useEffect(() => {
        peticionGet();
    }, [])

    return (
        <div>
            <LookFor
                peticionGet1={peticionGet}
                Manuals1={manuals}
                setManuals1={setManuals}
                Title ={<h1 className="TitleProduct">Manuales</h1>}
            />
            {console.log(manuals)}
            <div className='container d-flex justify-content-center align-items-center Manuals'>
                <div className='row'>
                    {!manuals ? 'Cargando...' :
                        manuals.map((manual) => <Manual key={Manual.code} manual={manual} />)
                    }
                </div>
            </div>

            <div>
                <div class='contenedor' >
                    <button class='botonF1' onClick={()=>setIsOpen(true)}>
                        <span>+</span>
                    </button>
                </div>
                <div className='modales'>
                    <Modal className='addManual' show={isOpen} onHide={()=> setIsOpen(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Agregar Manual</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id="addForm">
                                <p>Nombre del manual: <input type="text" name="name" placeholder="" id='1d'/></p>
                                <p>Autor: <input type="text" name="name" placeholder="" id='1d'/></p>
                                <p>Descripción: <input type="text" name="name" placeholder="" id='1d'/></p>
                                <p>Productos: <input type="text" name="name" placeholder="" id='1d'/></p>
                                <p>Categoria: <input type="text" name="name" placeholder="" id='1d'/></p>      
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="Agregar" onClick={()=> setIsOpen(false)}>Agregar</button>
                        </Modal.Footer>
                    </Modal>
            </div>
        </div>     
    </div>
    );
}

export default RestManuals;