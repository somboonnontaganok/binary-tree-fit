import React from 'react';

const Navbar = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="../src/assets/img/Thumbnail.png"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-dark" aria-current="page" href="#">Programs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning" href="#">Feature</a>
                        </li>
                    </ul>
                    <ul class="d-flex">
                        <li class="nav-item">
                            <button class="btn btn-light" type="submit">Log In</button>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">&nbsp;</a>
                        </li>
                        <li class="nav-item">
                        <button class="btn btn-outline-warning" type="submit">Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;