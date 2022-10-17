import '../../App.css';
import React, {useState, useEffect } from 'react';
import { Product } from '../Productos';

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
  return (
    <div className='container'>
      <div className='row'>
        {!products ? 'Cargando...' : 
          products.map((product)=> <Product key={product.code} product={product}/>)
        }
      </div>
    </div>
  );
}

export default RestProducts;
