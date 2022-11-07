import '../commons/App.css'
import logo from '../../Assets/logo.png'
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

                <a href="#about">{opc1}</a>
            </div>
        </div>
    );
    
}
export default Header;