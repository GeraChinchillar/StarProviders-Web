
import '../../App.css';
import React, {useState, useEffect } from 'react';

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
          products.map((product, index)=>{
            return(
              <div key={index} className='col-md-4 box-shadow'>
                <div className='card mb-4 box-shadow'>
                  <div className='card-body'> 
                    <h5 className='mb-1'>{product.name}</h5>
               
                    <p className='mb-1'>{product.description}</p>
                    <p className='mb-1'>{product.price}</p>
                    <p className='mb-1'>{product.provider}</p>
                    <p className='mb-1'>{product.category}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default RestProducts;
