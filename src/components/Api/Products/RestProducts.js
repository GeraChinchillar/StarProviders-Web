import '../../../App.css';
import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import Modal from 'react-bootstrap/Modal';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LookFor from '../../commons/Buscador'
import {postProduct} from '../Post'

function RestProducts(props) {
  const urlProducts = 'https://startproviders.uc.r.appspot.com/api/products'
  const [products, setProducts] = useState()
  const [isOpen,setIsOpen] = useState(false)

  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    providerName: "",
    providerId: 0,
    categoryName: "",
    urlImage: ""
  })

  const peticionGet = async () => {
    await axios.get(urlProducts)
      .then(response => {
        setProducts(response.data);
      }).catch(error => {
        console.log(error);
      })
  }


  const handleInputChange = (event) =>{
    // console.log(event.target.name)
    // console.log(event.target.value)
    setNewProduct({
      ...newProduct,
      [event.target.name] : event.target.value
  })
  }

  const handleSubmit = (event)=>{
      event.preventDefault()
      if(newProduct.name === "" || newProduct.description === "" || newProduct.price === "" || newProduct.urlImage === "" || newProduct.categoryName === ""){
        alert("Faltan campos por llenar")
      }
      else{
        setIsOpen(false);

        newProduct.id = setProductId();
        newProduct.providerName = props.user
        newProduct.providerId = props.providerId

        postProduct(newProduct);
        products.push(newProduct);
        setNewProduct({
          id: 0,
          name: "",
          description: "",
          price: 0,
          providerName: "",
          providerId: 0,
          categoryName: "",
          urlImage: ""
        })
      }
  }

  const setProductId = () => {
    return products[products.length - 1].id + 1
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className='body-size'>

      {<LookFor
        peticionGet1={peticionGet}
        products1={products}
        setProducts1={setProducts}
        Title ={<h1 className="TitleProduct">Productos</h1>}
      />}


      <div className='container d-flex justify-content-center align-items-center products'>
        <div className='row'>
          {!products ? 'Cargando...' :
            products.map((product) => <Product key={product.id} product={product} />)
          }
        </div>


      </div>
      <div className='contenedor' >
        <button className='botonF1' onClick={()=>setIsOpen(true)}>
          <span>+</span>
        </button>
      </div>
      <div className='modales'>
        <Modal className='addManual' show={isOpen} onHide={()=> setIsOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id="addForm" >
                    <p>Nombre del producto: <input type="text" onChange={handleInputChange} name="name" placeholder="" id='1d'/></p>
                    <p>Descripción: <input type="text" onChange={handleInputChange} name="description" placeholder="" id='2d'/></p>
                    <p>Precio: <input type="text" onChange={handleInputChange} name="price" placeholder="" id='3d'/></p>
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
                    <p>URL imagen: <input type="text" onChange={handleInputChange} name="urlImage" placeholder="" id='5d'/></p> 
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="Agregar" onClick={handleSubmit}>Agregar</button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  );
}

export default RestProducts;
