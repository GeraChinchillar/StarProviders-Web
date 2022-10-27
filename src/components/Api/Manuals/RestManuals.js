import '../../../App.css';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import LookFor from '../../commons/Buscador'
import { Manual } from './Manual';




function RestManuals() {
    const urlManuals = 'https://private-894052-starproviders.apiary-mock.com/manuels'
    const [manuals, setManuals] = useState()

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
    const handleShow = () => setShow(true);

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
            />
            {console.log(manuals)}
            <div className='container d-flex justify-content-center align-items-center Manuals'>
                <div className='row'>
                    {!manuals ? 'Cargando...' :
                        manuals.map((manual) => <Manual key={Manual.code} manual={manual} />)
                    }
                </div>
            </div>
        </div>
        // <div>

        //     {<LookFor
        //         peticionGet1={peticionGet}
        //         Manuals1={manuals}
        //         setManuals1={setManuals}
        //     />}


        //     <div className='container d-flex justify-content-center align-items-center Manuals'>
        //         <div className='row'>
        //             {!manuals ? 'Cargando...' :
        //                 manuals.map((Manual) => <Manual key={Manual.code} Manual={Manual} />)
        //             }
        //         </div>
        //         <button className='Agregar' onClick={handleShow}>Agregar</button>

        //         <div className='modales'>
        //             <Modal show={show} onHide={handleClose}>
        //                 <Modal.Header closeButton>
        //                     <Modal.Title className='title'>Agregar Manualo</Modal.Title>
        //                 </Modal.Header>
        //                 <Modal.Body>
        //                     <form id="addForm">
        //                         <input type="text" name="name" placeholder="Nombre" id='1d' />
        //                         <br /><br />
        //                         <input type="text" placeholder="description" name="Descripcion" id='2d' />
        //                         <br /><br />
        //                         <input type="text" placeholder="price" name="Precio" id='3d' />
        //                         <br /><br />
        //                         <input type="text" placeholder="provider" name="Proveedor" id='4d' />
        //                         <br /><br />
        //                         <input type="text" placeholder="category" name="Categoria" id='5d' />
        //                         <br /><br />
        //                         <input type="text" placeholder="url" name="URL" id='6d' />
        //                         <br /><br />

        //                     </form>

        //                 </Modal.Body>
        //                 <Modal.Footer>
        //                     <a id='botoncito'>Agregar</a>
        //                     <Button variant="secondary" onClick={handleClose}>
        //                         Close
        //                     </Button>
        //                 </Modal.Footer>
        //             </Modal>
        //         </div>


        //     </div>
        // </div>
    );
}

export default RestManuals;
