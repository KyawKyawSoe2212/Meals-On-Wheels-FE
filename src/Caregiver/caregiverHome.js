import React from 'react'
import './caregiverHome.css'
import store from '../Images/p22.png'
function caregiverHome() {
  const imageheight = '400px'
  const fontsize = '20px'
  return (
    <div>
       <nav className="memberHome-navbar">
                <div className="logo">Meals on Wheels</div>
                {/* <div className="nav-memberHome">
                    <h4> Profile</h4>
                </div> */}
                <div className="nav-memberHome">
                  <a className="nav-button" href='/careProfilePage'> Profile</a>
                </div>
            </nav>

          <div class="card" style={{width: '95%'}}>
              <img src={store} class="card-img-top" alt="..." style={{height: imageheight, width:'100%'}}/>
            <div class="card-body">
              <p class="card-text" style={{fontSize:fontsize}}>	
              Our dedicated caregivers provide compassionate support to those in need, offering a helping hand and a caring heart.
              Our caregivers are the backbone of our charity group, offering their time and expertise to make a difference in the lives of others
              Our caregivers bring comfort, companionship, and kindness to individuals who may be facing challenging times.
              At our charity group, caregivers are the heroes who make a difference in the lives of vulnerable individuals every day.
              Join our team of caregivers and become a part of a community that is dedicated to making a positive impact on the lives of others.
              </p>
            </div>
          </div>  

            
      <div className="table-container">
      <table className="caregiver-table">
        <thead>
          <tr className='Fist-role'>
            <td>Caregiver Name</td>
            <td>Patient Name</td>
            <td>Location</td>
            <td>Disease</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>
          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>

          <tr>
            <td>Sarah Johnson</td>
            <td>John Smith</td>
            <td>New York, NY</td>
            <td>Alzheimer's Disease</td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
           


    </div>
  )
}

export default caregiverHome
