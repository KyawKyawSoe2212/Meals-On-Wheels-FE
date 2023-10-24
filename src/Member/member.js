import React, { useState } from 'react';
import './member.css'
import axios from 'axios';

function member() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            qualifiedCase: e.target.text.value,
            address: e.target.secText.value,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register/member', formData);
            console.log('Registration successful!', response.data);
            
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

  return (
    <div>
        <nav className="member-navbar">
            <div className="logo">Meals on Wheels</div>
            <div className="nav-member">
                <h4> Member Sign Up</h4>
            </div>
        </nav>
        <div className="member-container">
          <h1 className="member-header">Sign Up</h1>
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
                <div className="form-group">
                    <label htmlFor="text">Location:</label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Your Location"
                        required
                    />

                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">You can write the reason, why you need our help</label>
                    <textarea class="form-control" name='secText' placeholder='Your Reason' id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                </div>
                    <div className='member-submit-buttom'>
                        <button type="submit" className="member-signup-button">
                        Sign Up
                        </button>
                    </div>
            </form>
         </div>

    </div>
  )
}

export default member;
