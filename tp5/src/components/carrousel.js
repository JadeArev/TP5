import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import slider from  '../images/Logo.png';

function Carrousel(){
    
    return (
        <>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que Ud. necesita</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={slider} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que Ud. necesita</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={slider} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que Ud. necesita</p>
              </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>    

        </>

    )
}

export default Carrousel;