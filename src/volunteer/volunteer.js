import React from 'react'
import './volunteer.css'
function volunteer() {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const one = e.target.name.value;
        const two = e.target.email.value;
        const three = e.target.password.value;
        console.log("Your Name ; " +one ,"\n","Your Email ; " +two, "\n","Your Password ; " +three);
    }

  return (
    <div>
    <nav className="volunteer-navbar">
        <div className="logo">Meals on Wheels</div>
        <div className="nav-volunteer">
            <h4> Volunteer Sign Up</h4>
        </div>
    </nav>
    <div className="volunteer-container">
      <h1 className="volunteer-header">Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    required
                />
            </div>
                <div className='volunteer-submit-buttom'>
                    <button type="submit" className="volunteer-signup-button">
                    Sign Up
                    </button>
                </div>
        </form>
     </div>
</div>
  )
}

export default volunteer
