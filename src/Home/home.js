import React from 'react'
// import { Link } from 'react-router-dom';
import './home.css';


function home () {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">Meals on Wheels</div>
          <div className="nav-buttons">
            {/* <Link to="/roles" className="nav-button">Sign Up</Link> */}
            <a className="nav-button" href='/roles'> Sign Up</a>
            <a className="nav-button" href='/signinPage'> Sign In</a>
            {/* <Link to="/signin" className="nav-button">Sign In</Link> */}
          </div>
      </nav>

    <div className='full-section'>
        <div className="content">
            <div className="left-section">
                <header>
                   <h1>Welcome to Meals On Wheels</h1>
                </header>
                <p>
                   Providing hot meals to those in need who are unable to cook for themselves or maintain their nutritional status due to age, disease, or disability.
                </p>
            </div>
            <div className="right-section">
                <button className="btn btn-success donate-button"><a href='donatePage'>Donate Now</a></button>
                <p>Your generous donation helps us continue our mission of providing hot meals to those in need.</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default home
