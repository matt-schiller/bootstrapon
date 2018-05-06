import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import oneLiners from '../utils/oneLiners';
import logo from '../images/bootstrapon-logo.svg';

class Navbar extends Component {

  render() {
    return (
      <div>
        <div className="py-3 text-center">
          <div className="text-uppercase" style={{"fontSize": "10px", "letterSpacing": "1.5px"}}>
            {oneLiners()}
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-light px-4 py-4">
          {/* <div className="container"> */}
            <Link className="navbar-brand font-weight-light text-danger" to="/">
              <img alt="Snappr" src={logo} height="20" className="mr-2" />
              Bootstrapon
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item px-2">
                  <Link className="nav-link text-secondary" to="/search">Search</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link text-secondary" to="/docs">API Docs</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link text-secondary" to="/selector">Selector</Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link text-secondary" to="/autoassembler">Autoassembler</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link btn btn-sm btn-outline-secondary px-3 mr-2" href="https://getbootstrap.com/">Bootstrap</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-sm btn-danger px-3" to="/register">Register</Link>
                </li>   
              </ul>
            </div>
          {/* </div> */}
        </nav>
      </div>
    );
  }
}

export default Navbar;
