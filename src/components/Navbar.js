import React from "react";
import { useNavigate } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  let location=useLocation();
  const handleLogout=()=>{
    localStorage.removeItem('auth-token');
    navigate('/login');
  }
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`}  to="/about">
                  About
                </Link>
              </li>
              
            </ul>
            {!localStorage.getItem('auth-token')?<form className="d-flex" role="search">
              <Link to="/login" className="btn btn-primary mx-2" role="button" >Login</Link>
              <Link to="/signup" className="btn btn-primary mx-2" role="button" >Signup</Link>
            </form>:<button onClick={handleLogout} className="btn btn-primary">Logout</button>
          }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
