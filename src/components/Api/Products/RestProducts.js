import '../../../App.css';
import React, {useState, useEffect } from 'react';
import { Product } from './Product';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function RestProducts() {
  const urlProducts = 'https://private-894052-starproviders.apiary-mock.com/products'
  const [products, setProducts] = useState()

  const fetchApi = ()=> {
    fetch(urlProducts).then((res)=>(
      res.json().then((resJson)=>(
        setProducts(resJson)
        )
      ) 
    ))
  }
  useEffect(()=>{
    fetchApi()
  }, []);



  //products.push(TST);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  setTimeout(()=>{    
    const btn = document.querySelector('#botoncito');
    btn.addEventListener('click', e=>{
      
      var NewProduct = {
        name: document.getElementById("1d").value,
        description: document.getElementById("2d").value,
        price: document.getElementById("3d").value,
        provider:document.getElementById("4d").value,
        category:document.getElementById("5d").value,
        url:document.getElementById("6d").value
      };

      products.push(NewProduct);

  });  }, 1000)

  

  return (
    <div className='container d-flex justify-content-center align-items-center products'>
      <div className='row'>
        {!products ? 'Cargando...' : 
          products.map((product)=> <Product key={product.code} product={product}/>)
        }
      </div>
      <button className='Agregar' onClick={handleShow}>Agregar</button>
{/*Agregar producto quemado jajaja*/}
    <div className='modales'>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className='title'>Agregar producto</Modal.Title>
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
              {/*
              <img src={product.url} width="200px" className='url'/>
              <p className='mb-1'>{product.description}</p>
              <p className='mb-1'> <b>Precio:</b> ${product.price}</p>
              <p className='mb-1'><b>Proveedor: </b>{product.provider}</p>
              <p className='mb-1'><b>Categoría: </b>{product.category}</p>
              */
}
            </Modal.Body>
            <Modal.Footer>
              <a id = 'botoncito'>Agregar</a>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>


    </div>
  );
}

export default RestProducts;
