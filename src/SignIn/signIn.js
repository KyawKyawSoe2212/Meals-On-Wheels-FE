import React from 'react'
import './signIn.css'
import axios from 'axios';

// import {link} from 'react-router-dom'
function signIn() {

    const handleSubmitSignIn= async (e)=>{
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value,

        };

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', formData);
            console.log('Login successful!', response.data);
            //data store in local storeage
            window.location.href = "/memberHomePage";
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

  return (
    <div className="container">
            <nav className="navbar">
                <div className="logo">Meals on Wheels</div>
            </nav>
            <div className='signIn-Bg'>
            <div className="signIn-container">
                 <h1 className="signIn-header">Log In</h1>
            <form onSubmit={handleSubmitSignIn}>
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
                    <div className='signIn-submit-buttom'>
                        <button type="submit" className="signIn-button">
                       Log In
                        </button>
                    </div>
            </form>
         </div>


         </div>
    </div>
  )
}

export default signIn
