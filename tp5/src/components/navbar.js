   import React from 'react';
   import 'bootstrap/dist/css/bootstrap.css';
   import Logo from '../images/Logo.png';


   function Navbar(){


        return (
            <>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a class="navbar-brand" href="Logo.png">
                    <div class="logo-image">
                        <img src={Logo} class="img-fluid"/>
                    </div>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
                  <li className="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </nav>
            </header>
            </>
            
        )
    };

    export default Navbar;