import '../commons/App.css'
import { FaLinkedin, FaMailBulk, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return(
        <div className="footer-basic">
            <footer>
            <div  className="social"><a href="#default"><FaLinkedin/></a><a href="#default"><FaMailBulk/></a><a href="#default"><FaGithub/></a></div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#default">Home</a></li>
                    <li className="list-inline-item"><a href="#default">Services</a></li>
                    <li className="list-inline-item"><a href="#default">About</a></li>
                    <li className="list-inline-item"><a href="#default">Terms</a></li>
                </ul>
                <p className="copyright">Company Name © 2022</p>
            </footer>
        </div>

    );
    
}
export default Footer;