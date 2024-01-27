import React from 'react'
import "./Navbar.css"
import {faBars,faSearch,faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon, fontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Navbar = () => {

    const renderNavbar = () => (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="logo.png"  className="logo" alt="" />
          <label className='logo-label' style={{fontsize:"14px",fontWeight:"bold"}}>indiCaf&egrave;</label>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="/">Browse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Cart</a>
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          <form className="d-flex">
            <div className='input-group'>

            <input className="form-control" type="text" size="40" placeholder="Search...." aria-label="Search" />
              <div className='input-group-append'>
            <button className="btn btn-outline-success" style={{background:"var(--primary-green)",color:"var(--primary-white)"}} type="submit"><FontAwesomeIcon icon={faSearch} /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
    )
  return (
    <>
    {renderNavbar()}
    </>
  )
}

export default Navbar