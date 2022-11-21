import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Product } from './Product';
import '../../../App.css';
import '../../commons/Home/Home.css'

function RestP() {
    const [products, setProducts] = useState()

    useEffect(() => {
      getProducts().then(response => {
        setProducts(response.data)
      })
    }, [])

    return(
        <div className='slider-card d-flex align-items-center' >
            {
                !products ? 'Cargando...' :
                products.map((product) =>
                    <div className='slider-card' key={product.id}>
                        <Product product={product} />
                    </div>
                )
            }
        </div>
    )
}

export async function getProducts() {
  try{
      
      const url = 'https://startproviders.uc.r.appspot.com/api/products'

      const response = await axios.get(url);
      return response
  }
  catch(e){
      console.log(e)
  }
}

export default RestP;