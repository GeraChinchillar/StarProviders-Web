import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Manual } from './Manual';
import '../../../App.css';
import '../../commons/Home/Home.css'

function RestM() {
    const urlManuals = 'https://private-894052-starproviders.apiary-mock.com/manuels'
    const [manuals, setManuals] = useState()

    useEffect(() => {
        const peticionGet = async () => {
            await axios.get(urlManuals)
                .then(response => {
                    setManuals(response.data);
                }).catch(error => {
                    console.log(error);
                })
        };
        peticionGet();
    }, [])

    return(
        <div className='slider-card d-flex align-items-center Manuals' >
            {
                !manuals ? 'Cargando...' :
                manuals.map((manual) => 
                    <div className='slider-card-manual'>
                        <Manual key={Manual.code} manual={manual} />
                    </div>
                )
            }
        </div>
    )
}
export default RestM;