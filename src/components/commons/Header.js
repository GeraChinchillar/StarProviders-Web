import '../commons/App.css'
import logo from '../../Assets/logo.png'
<<<<<<< Updated upstream

const Header = ({Name, opc1, opc2, opc3, opc4}) => {
    return(
        <div className="header">
            {/* <a href="#default" className="logo">{Name}</a> */}
            <img className='logo' src={logo}></img>
            <div className="header-right">
                <a className="active" href="#home">{opc4}</a>
                <a href="#contact">{opc2}</a>
                <a href="#about">{opc3}</a>
=======
import logoimagen from '../../Assets/logo-imagen.png'
import logoletras from '../../Assets/logo-letras.png'
import { Link } from "react-router-dom"

const Header = ({ Name, opc1, opc2, opc3, opc4 }) => {
    return (
        <div className="header" class='header'>
            {/* <a href="#default" className="logo">{Name}</a> */}
            <div>
                <button class='log'>
                    <img class='logoletras' src={logoletras}></img>
                    <img class='logoimagen' src={logoimagen}></img>
                </button>
            </div>  
            
            <div className="header-right" class='MenuHeader'>
                <Link className="active" to="/">{opc4}</Link>
                <Link to="/products">{opc2}</Link>
                <Link to="/manuals">{opc3}</Link>
>>>>>>> Stashed changes
                <a href="#about">{opc1}</a>
            </div>
        </div>
    );
    
}
export default Header;