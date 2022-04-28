import React from 'react'
import { Link } from 'react-router-dom';
import "./Skill.css"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container w-75">
                <Link to="/">
                <h4 className="navbar-brand brand"  >Port<span style={{color:"orange"}}>Folio</span></h4>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to='/' className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </Link>
                        <Link to="/about" className="nav-item">
                            <a className="nav-link" >About</a>
                        </Link>
                        <Link to='/skill' className="nav-item">
                            <a className="nav-link "  >Skills</a>
                        </Link>
                        <Link to="/project" className="nav-item">
                            <a className="nav-link "  >Projects</a>
                        </Link>
                        <Link to="/contact" className="nav-item">
                            <a className="nav-link "   >Contact</a>
                        </Link>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;