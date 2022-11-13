import ManualsSlider from "./ManualsSlider";
import ProductsSlider from "./ProductsSlider";
import ProviderSlider from "./ProviderSlider";
import { Link } from "react-router-dom"
import "./Home.css"

function Home(){
    return(
        <div id = "body">
        
            <Link  to="/products"> <h1 className="TitleProduct">Productos</h1></Link>
            <div className="home">
                <ProductsSlider/>
            </div>
            <Link  to="/manuals"> <h1 className="TitleProduct">Manuales</h1></Link>
            <div className="home">
                <ManualsSlider/>
            </div>
            <Link  to="/providers"> <h1 className="TitleProduct">Proveedores</h1></Link>
            <div className="home">
                <ProviderSlider/>
            </div>
            
        </div>
    );
}

export default Home;