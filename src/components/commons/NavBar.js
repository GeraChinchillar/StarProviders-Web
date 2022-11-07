import '../commons/App.css'
import star from '../../Assets/star.png'
import { LinkContainer } from 'react-router-bootstrap'


const NavBar = () => {
    return(
        <div>
          <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
            <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon" > </span>
              </button>
              <a class="navbar-brand" href="#"><img src={star} width='250px'/></a>
              

              <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
                  <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/** Poner lógica */  }
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                      </a>
                    </li>
                  {/** Poner lógica productos */  }
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link 1</a>
                    </li>
                  {/** Poner lógica proveedores*/  }
                  <li class="nav-item">
                      <a class="nav-link" href="#">Link 2</a>
                    </li>
                  {/** Poner lógica manuales*/  }
                  <li class="nav-item">
                      <a class="nav-link" href="#">Link 3</a>
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