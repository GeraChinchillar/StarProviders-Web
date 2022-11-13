import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import RestProducts from './components/Api/Products/RestProducts';
import Footer from './components/commons/Footer';
import NavBar from './components/commons/NavBar';
import Login from './components/Api/Login';
import FloatingActionButtons from './components/commons/FlotalanButton';
import RestManuals from './components/Api/Manuals/RestManuals';
import Home from './components/commons/Home/Home';
import Perfil from './components/Api/Perfil/Perfil';
import RestProviders from './components/Api/Providers/RestProviders';

function App() {

  return (
    <div className='App'>
      <Router className='App'>
        <NavBar />
        <Routes>
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/products" element={<RestProducts />} />
          <Route path="/manuals" element={<RestManuals />} />
          <Route path="/providers" element={<RestProviders />} />
        </Routes>
        <Footer />
        <FloatingActionButtons />
      </Router>
    </div>


  );
}

export default App;
