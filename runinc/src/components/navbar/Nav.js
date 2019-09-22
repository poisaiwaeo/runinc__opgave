import React from 'react'
//Navbar links
import {Link, NavLink, withRouter} from 'react-router-dom'
import logo from '../../images/logo.png';



const Nav = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-lg-5">
            <div className="container">
            <Link className="nav-link navbar-brand" to="/"><img src={logo} alt="Logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"  data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/events">Events</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                    </li>

                </ul>
                
                <form className="force-inline my-auto my-lg-0 mr-lg-5 h-25 d-flex bg-warning">
                    <input className="form-control my-auto h-25 bg-warning " type="search" placeholder="Search"/>
                    <button className="btn my-auto p-0 h-25 border-0 bg-dark text-light" type="submit">Search</button>
                </form>

            </div>
            </div>
        </nav>
     )
}
 
export default withRouter (Nav);
