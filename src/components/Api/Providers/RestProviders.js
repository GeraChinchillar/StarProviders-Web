import '../../../App.css';
import React, { useState, useEffect } from 'react';
import { Providers } from './Providers';
/**Cosas de busqueda */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LookFor from '../../commons/Buscador';

function RestProviders() {
  const urlProducts = 'https://private-894052-starproviders.apiary-mock.com/products'
  const [products, setProducts] = useState()

  const peticionGet = async () => {
    await axios.get(urlProducts)
      .then(response => {
        setProducts(response.data);
        products(response.data);
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
        Title ={<h1 className="TitleProduct">Proveedores</h1>}
      />}


      <div className='container d-flex justify-content-center align-items-center products'>
        <div className='row'>
          {!products ? 'Cargando...' :
            products.map((product) => <Providers key={product.code} product={product} />)
          }
        </div>


      </div>
    </div>
  );
}

export default RestProviders;