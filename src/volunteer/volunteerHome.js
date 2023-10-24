import React from 'react';
// import React, { UseState } from 'react';
import ppSeven from '../Images/pp8.png'
import './volunteerHome.css'
import ppOne from '../Images/pp1.png'
import ppTwo from '../Images/pp2.png'
import ppThree from '../Images/pp3.png'
import ppFour from '../Images/pp4.png'
import ppFive from '../Images/pp5.png'
import ppSix from '../Images/pp6.png'

// const photos = [
//   'pp1.jpg',
//   'pp2.jpg',
//   'pp3.jpg',
//   'pp4.jpg',
//   'pp5.jpg',
//   'pp6.jpg'
// ];

import volImage from '../Images/p13.png'
function volunteerHome() {


  return (
    <div>
       <nav className="volunteerHome-navbar">
            <div className="logo">Meals on Wheels</div>
            <div className="nav-volunteerHome">
              <a className="nav-button" href='/partnerProfilePage'> Profile</a>
            </div>
        </nav>
        

        <div class="volunter-card" style={{width: '95%'}}>
              <img src={ppSeven} class="card-img-top" alt="..." style={{height: '300px', width:'500px'}}/>
            <div class="vol-card-body">
              <p class="card-text" style={{fontSize:'20px'}}>	
              "Welcome to the Volunteer Opportunities Page of the 'Meals On Wheels' project by MerryMeal! As a volunteer, you have the chance to make a significant impact by providing hot, nutritious meals to qualified adults in need. By joining our team, you'll be contributing to essential tasks like meal preparation, delivery management, and fundraising efforts.

              Your dedication will help us ensure that those who are unable to cook for themselves due to age, disease, or disability receive the support and care they deserve. Thank you for considering joining our team at MerryMeal."
             </p>
            </div>
          </div>

          <div class="first-role">
              <div class="vol-image-card" style={{width: '350px'}}>
                  <img src={ppOne} class="card-img-top" alt="..." style={{height: '150px', width:'150px'}}/>
                  <div class="pone-card-body">
                    <h5 class="card-title" style={{ fontSize : '15px'}}>Name  :  Ms.Rose</h5>
                    <p class="card-text"> Age  :  30</p>
                  </div>
                </div>
                <div class="vol-image-card" style={{width: '350px'}}>
                  <img src={ppTwo} class="card-img-top" alt="..." style={{height: '150px', width:'150px'}}/>
                  <div class="pone-card-body">
                    <h5 class="card-title" style={{ fontSize : '15px'}}>Name  :  Ms.Jasmin</h5>
                    <p class="card-text"> Age  :  27</p>
                  </div>
                </div>
                <div class="vol-image-card" style={{width: '350px'}}>
                  <img src={ppThree} class="card-img-top" alt="..." style={{height: '150px', width:'150px'}}/>
                  <div class="pone-card-body">
                    <h5 class="card-title" style={{ fontSize : '15px'}}>Name  :  Ms.Moon</h5>
                    <p class="card-text"> Age  :  22</p>
                  </div>
                </div>
                <div class="vol-image-card" style={{width: '350px'}}>
                  <img src={ppFour} class="card-img-top" alt="..." style={{height: '150px', width:'150px'}}/>
                  <div class="pone-card-body">
                    <h5 class="card-title" style={{ fontSize : '15px'}}>Name  :  Mr.Joe</h5>
                    <p class="card-text"> Age  :  28</p>
                  </div>
                </div>
                <div class="vol-image-card" style={{width: '350px'}}>
                  <img src={ppFive} class="card-img-top" alt="..." style={{height: '150px', width:'150px'}}/>
                  <div class="pone-card-body">
                    <h5 class="card-title" style={{ fontSize : '15px'}}>Name  :  Ms.Martin</h5>
                    <p class="card-text"> Age  :  27</p>
                  </div>
                </div>
                <div class="vol-image-card" style={{width: '350px'}}>
                  <img src={ppSix} class="card-img-top" alt="..." style={{height: '150px', width:'150px'}}/>
                  <div class="pone-card-body">
                    <h5 class="card-title" style={{ fontSize : '15px'}}>Name  :  Ms.John</h5>
                    <p class="card-text"> Age  :  23</p>
                  </div>
                </div>
               

          </div>


    </div>
  )
}

export default volunteerHome
