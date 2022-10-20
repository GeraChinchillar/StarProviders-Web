import '../commons/App.css'
import logo from '../../Assets/logo.png'

const Header = ({Name, opc1, opc2, opc3, opc4}) => {
    return(
        <div className="header">
            {/* <a href="#default" className="logo">{Name}</a> */}
            <img className='logo' src={logo}></img>
            <div className="header-right">
                <a className="active" href="#home">{opc4}</a>
                <a href="#contact">{opc2}</a>
                <a href="#about">{opc3}</a>
                <a href="#about">{opc1}</a>
            </div>
        </div>
    );
    
}
export default Header;