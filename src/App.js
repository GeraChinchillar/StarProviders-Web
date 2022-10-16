import './App.css';
import './components/Api/RestProducts'
import RestProducts from './components/Api/RestProducts';
import Header from './components/Api/commons/Header';
import Footer from './components/Api/commons/Footer';
import NavBar from './components/Api/commons/NavBar';

function App() {
  return (
    <div>
      <Header 
        Name = 'Star Providers'
        opc1='Boton 1'
        opc2='Boton 2'
        opc3='Boton 3'
      />
      <NavBar/>
      <RestProducts/>
      <Footer />
    </div>

    );
}

export default App;
