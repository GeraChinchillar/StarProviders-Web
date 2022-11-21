import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import RestProducts from './components/Api/Products/RestProducts';
import Footer from './components/commons/Footer';
import NavBar from './components/commons/NavBar';
import Login from './components/Api/Login/Login';
import RestManuals from './components/Api/Manuals/RestManuals';
import Home from './components/commons/Home/Home';
import Perfil from './components/Api/Perfil/Perfil';
import RestProviders from './components/Api/Providers/RestProviders';

function App(props) {
  return (
    <div className='App' id='menu-app'>
      <Router className='App'>
        <NavBar user = {props.user}/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/products" element={<RestProducts user = {props.user} providerId={props.providerId}/>} />
          <Route path="/manuals" element={<RestManuals user = {props.user} providerId={props.providerId}/>} />
          <Route path="/providers" element={<RestProviders />} />
        </Routes>
        <Footer />
      </Router>
    </div>


  );
}

export default App;
