import '../commons/App.css'
import star from '../../Assets/star.png'
import { Link } from "react-router-dom"


const NavBar = (props) => {

  function cerrarSesion(){
    document.getElementById("menu-app").style.display = "none";
    document.getElementById("form-login").style.display = "block";
    document.getElementById("form3Example3").value = "";
    document.getElementById("form3Example4").value = "";
    document.getElementById("form3Example3").focus();
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" > </span>
          </button>

          <Link  to="/" className='navbar-brand'> <img src={star} width='250px' alt='star providers logo'/></Link>


          <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Usuario: {props.user}</h5>
              <button type="button" className="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/perfil">Perfil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manuals">Manuales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/providers">Proveedores</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/' onClick={cerrarSesion}>Cerrar Sesion</a>
                </li>              
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );

}
export default NavBar;