import ManualsSlider from "./ManualsSlider";
import ProductsSlider from "./ProductsSlider";
import "./Home.css"

function Home(){
    return(
        <div id = "body">
            <h1 className="TitleProduct">Productos</h1>
            <div className="home">
                <ProductsSlider/>
            </div>
            <h1 className="TitleProduct">Manuals</h1>
            <div className="home">
                <ManualsSlider/>
            </div>
            
        </div>
    );
}

export default Home;