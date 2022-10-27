import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import RestProducts from './components/Api/Products/RestProducts';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import NavBar from './components/commons/NavBar';
import Login from './components/Api/Login';
import Manuals from './components/Api/Manuals/RestManuals';

function App() {
  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
  }
  // <Login/>
  return (
    <Router className='App'>
      <NavBar
        UserName='Usuario'
      />
      <Header
        Name='Star Providers'
        opc1='Proveedor'
        opc2='Producto'
        opc3='Manual'
        opc4='Inicio'
      />
      <Routes>
        <Route path="/" element={<RestProducts />} />
        <Route path="/products" element={<RestProducts />} />
        <Route path="/manuals" element={<Manuals />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
