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
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon" > </span>
          </button>

          <Link  to="/" className='navbar-brand'> <img src={star} width='250px' alt='star providers logo'/></Link>


          <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Usuario: {props.user}</h5>
              <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link className="nav-link" to="/perfil">Perfil</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/products">Productos</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/manuals">Manuales</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/providers">Proveedores</Link>
                </li>
                <li class="nav-item">
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