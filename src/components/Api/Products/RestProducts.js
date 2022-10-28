import '../../../App.css';
import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import Modales from "../../commons/Modales";
import Button from 'react-bootstrap/Button';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import LookFor from '../../commons/Buscador'

function RestProducts() {
  const urlProducts = 'https://private-894052-starproviders.apiary-mock.com/products'
  const [products, setProducts] = useState()

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
    <div>

      {<LookFor
        peticionGet1={peticionGet}
        products1={products}
        setProducts1={setProducts}
      />}

      <div className='container d-flex justify-content-center align-items-center products'>
        <div className='row'>
          {!products ? 'Cargando...' :
            products.map((product) => <Product key={product.code} product={product} />)
          }
        </div>
      </div>
    </div>
  );
}

export default RestProducts;
