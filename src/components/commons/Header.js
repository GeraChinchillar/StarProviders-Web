import '../commons/App.css'

const Header = ({Name, opc1, opc2, opc3}) => {
    return(
        <div className="header">
            <a href="#default" className="logo">{Name}</a>
            <div className="header-right">
                <a className="active" href="#home">{opc1}</a>
                <a href="#contact">{opc2}</a>
                <a href="#about">{opc3}</a>
            </div>
        </div>
    );
    
}
export default Header;