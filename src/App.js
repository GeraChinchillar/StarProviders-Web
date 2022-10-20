import './App.css';
import RestProducts from './components/Api/Products/RestProducts';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import NavBar from './components/commons/NavBar';
import Login from './components/Api/Login';

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
        opc1='Boton 1'
        opc2='Boton 2'
        opc3='Boton 3'
      />
      <RestProducts/>
      <Footer />
    </div>

    );
}

export default App;
