import '../commons/App.css'
import star from '../../Assets/star.png'
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon" > </span>
          </button>
          <a class="navbar-brand" href="#"><img src={star} width='250px' /></a>


          <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link className="nav-link" to="/perfil">Perfil</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
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
                  <Link className="nav-link" to="/login">Login</Link>
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