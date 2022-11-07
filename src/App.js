import './App.css';
import RestProducts from './components/Api/Products/RestProducts';
import Footer from './components/commons/Footer';
import NavBar from './components/commons/NavBar';
import Login from './components/Api/Login';
import FloatingActionButtons from './components/commons/FlotalanButton';

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <RestProducts/>
      <Footer />
      <FloatingActionButtons/>
    </div>
    

    );
}

export default App;
