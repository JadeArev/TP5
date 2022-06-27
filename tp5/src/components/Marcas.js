import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ferrum from '../images/ferrum.png';
import delta from '../images/delta.png';
import LogoNegativo from '../images/Logo-Negativo.png';
import logoips from '../images/logo_ips.png';


function Marcas() {
    return (
        <>
            <div className='container'>
		        <h3 className=" mt-4 mb-4" text-Align="left">Marcas con las que trabajamos</h3>
                <div className="row align-items-center text-center">
                    <div className="col">
                        <img className="mt-4" src={ferrum} width="250" alt="ferrum"/>
                    </div>
                    <div className="col">
                        <img className="mt-4" src={delta} width="250" alt="delta"/>

                    </div>
                    <div className="col">
                        <img className="mt-4" src={LogoNegativo} width="250" alt="ferrum"/>
                    </div>
                    
                    <div className="col">
                        <img className="mt-4" src={logoips} width="50" alt="ferrum"/>
                    </div>
                </div>
	        </div>

            

        </>
    )
}

export default Marcas