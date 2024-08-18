import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export default function Navbar(props) {


    return(
  
<nav className={`navbar navbar-expand-lg bg-${props.myMode} border-bottom border-body`} data-bs-theme={`${props.myMode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.logoName}</Link> */}
    <a className="navbar-brand" href="#">{props.logoName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/textform">TextForm</Link>
        </li> */}
       
        
     
      </ul>
   
      <div className={`d-flex mx-2 ${props.myColor}`}>
        <button value="#563d7c" onClick={props.colorChange} className='btn p-2 rounded-circle border-light m-1'  style={{ backgroundColor: '#563d7c', height:'20px', width:'20px'}}></button>
        <button value="#4c535a" onClick={props.colorChange} className='btn p-2 rounded-circle border-light m-1'  style={{ backgroundColor: '#4c535a', height:'20px', width:'20px'}}></button>
        <button value="#3c1a1a" onClick={props.colorChange} className='btn p-2 rounded-circle border-light m-1'  style={{ backgroundColor: '#3c1a1a', height:'20px', width:'20px'}}></button>
   
      
      </div>
      <div className="form-check form-switch">

  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.myMode==='light'?'dark' : 'light'}`}  htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
    </div>
  </div>
</nav>


    )

}

Navbar.propTypes = {
    logoName : PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    logoName : "Enter the Logo Name Here",
}
