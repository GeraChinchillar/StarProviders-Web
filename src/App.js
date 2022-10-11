
import './App.css';
import './components/Api/RestProducts'
import React, {useState, useEffect } from 'react';
import RestProducts from './components/Api/RestProducts';

function App() {
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
  return (<RestProducts></RestProducts>);
}

export default App;
