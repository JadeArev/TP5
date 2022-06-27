import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Capa from '../images/Capa-1.png'



function Card(){

    return (
        <>

        <div className="container">
        <div className="card-deck">
            <div className="card">
              <img src={Capa} class="card-img-top" alt="FOTOVICH"/>
              <div className="card-body">
                <h5 className="card-title">Lavatorios</h5>
                <p className="card-text">Mueble colgante para lavatorio</p>
              </div>
              
            </div>
            <div class="card">
              <img src="Capa-1.png" class="card-img-top" alt="FOTOVICH"/>
              <div class="card-body">
                <h5 class="card-title">Lavatorios</h5>
                <p class="card-text">Mueble colgante para lavatorio</p>
              </div>
              
            </div>
            <div class="card">
              <img src="Capa-1.png" class="card-img-top" alt="FOTOVICH"/>
              <div class="card-body">
                <h5 class="card-title">Lavatorios</h5>
                <p class="card-text">Mueble colgante para lavatorio</p>
              </div>
              <br/>
              <br/>
           
            </div>
          </div>
          <div class="card-deck">
            <div class="card">
              <img src="Capa-1.png" class="card-img-top" alt="FOTOVICH"/>
              <div class="card-body">
                <h5 class="card-title">Lavatorios</h5>
                <p class="card-text">Mueble colgante para lavatorio</p>
              </div>
              
            </div>
            <div class="card">
              <img src="Capa-1.png" class="card-img-top" alt="FOTOVICH"/>
              <div class="card-body">
                <h5 class="card-title">Lavatorios</h5>
                <p class="card-text">Mueble colgante para lavatorio</p>
              </div>
              
            </div>
            <div class="card">
              <img src="Capa-1.png" class="card-img-top" alt="FOTOVICH"/>
              <div class="card-body">
                <h5 class="card-title">Lavatorios</h5>
                <p class="card-text">Mueble colgante para lavatorio</p>
              </div>
              <br/>
              <br/>
           
            </div>
          </div>
      </div>
 </>

    )
}