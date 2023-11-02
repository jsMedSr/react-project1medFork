import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem , {NavItemDropDown} from '../NavItem/NavItem'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-md  navbar-dark text-white cyborg-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt=""  />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItem>
          <a className="nav-link " aria-current="page" href="#">Home</a>
          </NavItem>

          <NavItem>
          <a className="nav-link " aria-current="page" href="#">Browse</a>
          </NavItem>
          <NavItemDropDown>
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Details</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>

        </NavItemDropDown>

          <NavItem>
          <a className="nav-link " aria-current="page" href="#">streams</a>
          </NavItem>

          <NavItem>
          <a className="nav-link " href="#">Profile</a>
          </NavItem>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header