import React from 'react'
import './roleSelection.css';

function roleselection() {
  return (
    <div className="container">
            <nav className="navbar">
                <div className="logo">Meals on Wheels</div>
            </nav>

      <div className='role-header'>
          <div className="role-content">
                <div>
                <header className="signup-header">
                  <h2>Sign Up</h2>
                </header>
                </div>
                  <div className="button-container">
                    <button className="signup-button"><a href='memberrole'>Member</a></button>
                    <button className="signup-button"><a href='caregiverrole'>Caregivers</a></button>
                    <button className="signup-button"><a href='partnerrole'>Partner</a></button>
                    <button className="signup-button"><a href='volunteerrole'>Volunteer</a></button>
                  </div>
            </div>
        </div>
   </div>
  )
}

export default roleselection
