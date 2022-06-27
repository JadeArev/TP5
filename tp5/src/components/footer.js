import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import telefono from '../images/telefono.png';


function Footer(){

    return (

        <>
        
        <footer className="mt-4 bg-dark w-100 py-4 flex-shrink-0 ">
            <div className="container py-4">

                <div className="row align-items-center">
                    <div className="col">
                        <img src={logoByn} />
                    </div>
                    <div className="col">
                        <h6 className="text-white mb-3"> <i className="fa-solid fa-location-dot"></i>  Beiro 3300 - Villa Del Parque</h6>
                        
                        <h6 className="text-white mb-3"> <i className="fa-solid fa-envelope"></i> Contacto@sanitarioscampana.com.ar</h6>
                    </div>
                    <div className="col text-center">
                        <img src={telefono} alt="ferrum"/>
                        <span className='phoneNumber'> 4503-6015</span>
                    </div>
                </div>
            </div>
            </footer>
        
        </>
    )
}

export default Footer;