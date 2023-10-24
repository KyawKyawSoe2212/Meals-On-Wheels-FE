import React from 'react'
import './caregiver.css'
function caregiver() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register/caregiver', formData);
            console.log('Registration successful!', response.data);
            
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

  return (
    <div>
    <nav className="care-navbar">
        <div className="logo">Meals on Wheels</div>
        <div className="nav-care">
            <h4> Caregiver Sign Up</h4>
        </div>
    </nav>
    <div className="care-container">
      <h1 className="care-header">Sign Up</h1>
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
                <div className='care-submit-buttom'>
                    <button type="submit" className="care-signup-button">
                    Sign Up
                    </button>
                </div>
        </form>
     </div>
</div>
  )
}

export default caregiver
