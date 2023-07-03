import React from 'react';

const Navbar = ({ totalCounters }) => {

    return(
        <nav className="navbar  bg-dark color-white " data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand m-2">Navbar 
                <span className="badge text-bg-primary m-2">
                {totalCounters}
                </span>
            </a>
            
        </div> 
        </nav>
    );

}

export default Navbar;