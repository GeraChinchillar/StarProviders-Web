import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Product } from './Product';
import '../../../App.css';
import '../../commons/Home/Home.css'

function RestP() {
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

    useEffect(() => {
        peticionGet();
    }, [])

    return(
        <div className='slider-card d-flex align-items-center' >
            {
                !products ? 'Cargando...' :
                products.map((product) =>
                    <div className='slider-card'>
                        <Product key={product.code} product={product} />
                    </div>
                )
            }
        </div>
    )
}
export default RestP;