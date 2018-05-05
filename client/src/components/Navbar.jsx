import React, { Component } from 'react';
import oneLiners from '../utils/oneLiners';
import logo from '../images/bootstrapon-logo.svg';

class Navbar extends Component {

    render() {
        return (
            <div>
                <div className="py-3 text-center">
                    <div className="text-uppercase" style={{"fontSize": "10px", "letterSpacing": "1.5px"}}>{oneLiners()}</div>
                </div>
                <nav className="navbar navbar-expand-lg bg-light px-4 py-4">
                    {/* <div className="container"> */}
                        <a className="navbar-brand font-weight-light text-danger" href="/">
                            <img alt="Snappr" src={logo} height="20" className="mr-2" />
                            Bootstrapon
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item px-2">
                                    <a className="nav-link text-secondary" href="/search">Search</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link text-secondary" href="/docs">API Docs</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link text-secondary" href="/selector">Selector</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link text-secondary" href="/autocompile">Autocompiler</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                    <a className="nav-link btn btn-sm btn-outline-secondary px-3 mr-2" href="https://getbootstrap.com/">Bootstrap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-sm btn-danger px-3" href="/register">Register</a>
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
