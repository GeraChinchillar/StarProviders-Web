import '../../../App.css';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LookFor from '../../commons/Buscador'
import { Manual } from './Manual';
import {postManual} from '../Post'
import {getProducts} from "../Products/RestP"

function RestManuals(props) {
    const urlManuals = 'https://startproviders.uc.r.appspot.com/api/manuals'
    const [manuals, setManuals] = useState()
    const [products, setProducts] = useState()
    const [isOpen,setIsOpen] = useState(false)

    const [step, setStep] = useState("")
    const [newManual, setNewManual] = useState({
        id: 0,
        name: "",
        urlImage: "",
        description: "",
        step: [],
        materials: [],
        userName: "",
        userId: 0,
        categoryName: ""
      })

    const peticionGet = async () => {
        await axios.get(urlManuals)
            .then(response => {
                setManuals(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleInputChange = (event) =>{
        // console.log(event.target.name)
        // console.log(event.target.value)
        setNewManual({
          ...newManual,
          [event.target.name] : event.target.value
      })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(newManual.name === "" || newManual.description === "" || newManual.price === "" || newManual.urlImage === "" || newManual.categoryName === ""){
          alert("Faltan campos por llenar")
        }
        else{
          setIsOpen(false);
  
          newManual.id = setManualId();
          newManual.userName = props.user
          newManual.userId = props.userId
  
          postManual(newManual);
          manuals.push(newManual);

          setNewManual({
            id: 0,
            name: "",
            urlImage: "",
            description: "",
            step: [],
            materials: [],
            userName: "",
            userId: 0,
            categoryName: ""
          })
        }
    }

    const handleInputStep = (event) =>{
        setStep(event.target.value)
    }

    const handleAddStep = (event) =>{
        event.preventDefault()
        newManual.step.push(step)
        setStep("")
        document.getElementById("input-step").value = "";
    }

    const handleAddProduct = (event) =>{
        event.preventDefault()
        newManual.materials.push(step)
        setStep("")
        document.getElementById("product-select").value = "";
    }
  
    const setManualId = () => {
      return manuals[manuals.length - 1].id + 1
    }



    useEffect(() => {
        peticionGet();
        getProducts().then(response => {
            setProducts(response.data)
        })
    }, [])

    return (
        <div>
            <LookFor
                peticionGet1={peticionGet}
                Manuals1={manuals}
                setManuals1={setManuals}
                Title ={<h1 className="TitleProduct">Manuales</h1>}
            />
            <div className='container d-flex justify-content-center align-items-center Manuals'>
                <div className='row'>
                    {!manuals ? 'Cargando...' :
                        manuals.map((manual) => <Manual key={manual.id} manual={manual} />)
                    }
                </div>
            </div>

            <div>
                <div className='contenedor' >
                    <button className='botonF1' onClick={()=>setIsOpen(true)}>
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
                                <p>Nombre del manual: <input type="text" onChange={handleInputChange} name="name" placeholder="" id='1d'/></p>
                                <p>Descripción: <input type="text" onChange={handleInputChange} name="description" placeholder="" id='1d'/></p>
                                <div className='steps'>
                                    <p>Productos:</p>
                                        <select id="product-select" className='select-item input-step' onChange={handleInputStep} name="categoryName">   
                                            <option value=""></option>
                                            {!products ? 'Cargando...' :products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
                                        </select>
                                        <button className="btn-step" onClick={handleAddProduct}>Añadir</button>
                                </div>
                                <ul>
                                    {newManual.materials.map(oneMaterial => <li key={oneMaterial}>{oneMaterial}</li>)}
                                </ul>
                                <div className='steps'>
                                    <p>Procedimiento: </p> 
                                    <input id="input-step" type="text" className='input-step' onChange={handleInputStep} name="steps" placeholder=""/>
                                    <button className="btn-step" onClick={handleAddStep}>Añadir</button>
                                </div>
                                <ul>
                                    {newManual.step.map(oneStep => <li>{oneStep}</li>)}
                                </ul>
                                <p>Categoria: 
                                    <select id="4d" className='select-item' onChange={handleInputChange} name="categoryName">
                                        <option value=""></option>
                                        <option value="Alimentos">Alimentos</option>
                                        <option value="Cuidado Personal">Cuidado Personal</option>
                                        <option value="Cuidado del Hogar">Cuidado del Hogar</option>
                                        <option value="Tecnología">Tecnología</option> 
                                        <option value="Mecánica">Mecánica</option> 
                                        <option value="Carpintería">Carpintería</option> 
                                    </select>
                                </p>  
                   <p>URL imagen: <input type="text" onChange={handleInputChange} name="urlImage" placeholder="" id='1d'/></p> 
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="Agregar" onClick={handleSubmit}>Agregar</button>
                        </Modal.Footer>
                    </Modal>
            </div>
        </div>     
    </div>
    );
}

export default RestManuals;