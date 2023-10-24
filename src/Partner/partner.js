import React from 'react'
import './partner.css'
function partner() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.secText.value,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register/partner', formData);
            console.log('Registration successful!', response.data);
            
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

  return (
    <div>
    <nav className="partner-navbar">
        <div className="logo">Meals on Wheels</div>
        <div className="nav-partner">
            <h4> Caregiver Sign Up</h4>
        </div>
    </nav>
    <div className="partner-container">
      <h1 className="partner-header">Sign Up</h1>
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
                <div className='partner-submit-buttom'>
                    <button type="submit" className="partner-signup-button">
                    Sign Up
                    </button>
                </div>
        </form>
     </div>
</div>
  )
}

export default partner
