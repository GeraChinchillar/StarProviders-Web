import '../../../App.css';
import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import Modal from 'react-bootstrap/Modal';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import LookFor from '../../commons/Buscador'

function RestProducts() {
  const urlProducts = 'https://private-894052-starproviders.apiary-mock.com/products'
  const [products, setProducts] = useState()
  const [isOpen,setIsOpen] = useState(false)

  const peticionGet = async () => {
    await axios.get(urlProducts)
      .then(response => {
        setProducts(response.data);
      }).catch(error => {
        console.log(error);
      })
  }


  setTimeout(() => {
    const btn = document.querySelector('#botoncito');
    btn.addEventListener('click', e => {

      var NewProduct = {
        name: document.getElementById("1d").value,
        description: document.getElementById("2d").value,
        price: document.getElementById("3d").value,
        provider: document.getElementById("4d").value,
        category: document.getElementById("5d").value,
        url: document.getElementById("6d").value
      };

      products.push(NewProduct);

    });
  }, 2000)

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
            products.map((product) => <Product key={product.code} product={product} />)
          }
        </div>


      </div>
      <div class='contenedor' >
        <button class='botonF1' onClick={()=>setIsOpen(true)}>
          <span>+</span>
        </button>
      </div>
      <div className='modales'>
        <Modal className='addManual' show={isOpen} onHide={()=> setIsOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id="addForm">
                    <p>Nombre del producto: <input type="text" name="name" placeholder="" id='1d'/></p>
                    <p>Descripción: <input type="text" name="name" placeholder="" id='1d'/></p>
                    <p>Precio: <input type="text" name="name" placeholder="" id='1d'/></p>
                    <p>Categoria: <input type="text" name="name" placeholder="" id='1d'/></p>      
                    <label for="formFileDisabled" class="form-label">Subir imagen del producto</label>
                    <input class="form-control" type="file" id="formFileDisabled" accept="image/png, image/gif, image/jpeg" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="Agregar" onClick={()=> setIsOpen(false)}>Agregar</button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  );
}

export default RestProducts;
