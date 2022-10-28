import { FaLinkedinIn } from 'react-icons/fa';
import '../commons/App.css'
import { Link } from "react-router-dom"


const NavBar = () => {

    setTimeout(() => {
        const btn = document.querySelector('#menu-btn');
        const menu = document.querySelector('#sidemenu');
        btn.addEventListener('click', e => {
            menu.classList.toggle('menu-expanded')
            menu.classList.toggle('menu-collapsed')

            document.querySelector('body').classList.toggle('body-expanded')
        });
    }, 2000)

    return (
        <div className='menu-collapsed' id='sidemenu'>
            <div id='header'>
                <div id='menu-btn'>
                    <div className='btn-hamburger'></div>
                    <div className='btn-hamburger'></div>
                    <div className='btn-hamburger'></div>
                </div>
            </div>

            <div id='profile'>
                <div id='photo'><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='Profile' width='30px' /></div>
                <div id='name'><span>Usuario</span></div>
            </div>

            <div id='menu-items'>
                <div className='item'>
                    <Link to={"/providers"}>
                        <div className='icon'><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='Profile' /></div>
                        <div className='tittle'><span>Proveedores</span> </div>
                    </Link>
                </div>
                <div className='item separator'> </div>
                <div className='item'>
                    <Link to="/products">
                        <div className='icon'><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='Profile' /></div>
                        <div className='tittle'><span>Productos</span> </div>
                    </Link>
                </div>
                <div className='item separator'> </div>
                <div className='item'>
                    <Link to='/manuals'>
                        <div className='icon'><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='Profile' /></div>
                        <div className='tittle'><span>Manuales</span> </div>
                    </Link>
                </div>
                <div className='item separator'> </div>

            </div>

        </div >

    );

}
export default NavBar;