import '../commons/App.css'
import logo from '../../Assets/logo.png'
import logoimagen from '../../Assets/logo-imagen.png'
import logoletras from '../../Assets/logo-letras.png'
import { Link } from "react-router-dom"

const Header = ({ Name, opc1, opc2, opc3, opc4 }) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="#">Header</a>
            </nav>
        </div>
    );
    
}
export default Header;