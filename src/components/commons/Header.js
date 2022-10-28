import '../commons/App.css'
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom"

const Header = ({ Name, opc1, opc2, opc3, opc4 }) => {
    return (
        <div className="header">
            {/* <a href="#default" className="logo">{Name}</a> */}
            <img className='logo' src={logo}></img>
            <div className="header-right">
                <Link className="active" to="/">{opc4}</Link>
                <Link to="/products">{opc2}</Link>
                <Link to="/manuals">{opc3}</Link>
                <a href="#about">{opc1}</a>
            </div>
        </div>
    );

}
export default Header;