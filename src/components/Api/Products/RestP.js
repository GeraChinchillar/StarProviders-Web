import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Product } from './Product';
import '../../../App.css';
import '../../commons/Home/Home.css'

function RestP() {
    const urlProducts = 'https://startproviders.uc.r.appspot.com/api/products'
    const [products, setProducts] = useState()

    useEffect(() => {
      const peticionGet = async () => {
        await axios.get(urlProducts)
          .then(response => {
            setProducts(response.data);
          }).catch(error => {
            console.log(error);
          })
      };
      peticionGet();
    }, [])

    return(
        <div className='slider-card d-flex align-items-center' >
            {
                !products ? 'Cargando...' :
                products.map((product) =>
                    <div className='slider-card'>
                        <Product key={product.id} product={product} />
                    </div>
                )
            }
        </div>
    )
}
export default RestP;