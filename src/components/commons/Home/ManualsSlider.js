import React from "react";
import "./Home.css"
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RestProducts from "../../Api/Products/RestProducts";
import RestM from "../../Api/Manuals/RestM";

const ManualsSlider = (props) =>{
    
    const slideLeft = () =>{
        var slider = document.getElementById("ManualSlider");
        console.log("slider Left")
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () =>{
        var slider = document.getElementById("ManualSlider");
        console.log("slider Right")
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <div id="main-slider-container" className="main-slider-container first">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div className="slider" id = "ManualSlider">
                <RestM/>
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>

        </div>
    )
}
export default ManualsSlider