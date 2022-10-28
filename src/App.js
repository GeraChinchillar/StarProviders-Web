import './App.css';
import RestProducts from './components/Api/Products/RestProducts';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import NavBar from './components/commons/NavBar';
import Login from './components/Api/Login';
import FloatingActionButtons from './components/commons/FlotalanButton';

function App() {
  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
  }
// <Login/>
  return (
    <div className='App'>
      <NavBar 
        UserName = 'Usuario'
      />
      <Header 
        Name = 'Star Providers'
        opc1='Proveedor'
        opc2='Producto'
        opc3='Manual'
        opc4='Aleatorio'
      />
      <RestProducts/>
      <Footer />
      <FloatingActionButtons/>
    </div>
    

    );
}

export default App;
