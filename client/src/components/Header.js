import React from 'react';
import {Link} from "react-router-dom"
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    
    <Link className="navbar-brand" to="/"> MERN LOGIN AND SIGNUP
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      {/* ml margin left to take signup and login to left*/}
      <ul className="navbar-nav ml-auto"> 
        <li className="nav-item active">
         
          <Link className="navbar-brand" to="/signup"> Signup
    </Link>
    <Link className="navbar-brand" to="/login"> Login
    </Link>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}

export default Header;
