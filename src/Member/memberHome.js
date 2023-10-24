import React from 'react'
import './memberHome.css'
import store from '../Images/p13.png'
import pOne from '../Images/p16.png'
import pTwo from '../Images/p17.png'
import pThree from '../Images/p18.png'
import pFour from '../Images/21.png'
import pFive from '../Images/p20.png'
import pSix from '../Images/p19.png'
import axios from 'axios'
async function GetAllMeals(){

  try {
    const res = await axios.get(`http://localhost:8080/api/meals`);
    console.log(res)
  } catch (error) {
    // Handle errors
  }
}

function memberHome() {
  console.log("This is Meals!");
  const imageheight = '300px'
  const fontsize = '20px'
  const pOneImageheight ='300px'
  GetAllMeals();
  return (
    <div>
            <nav className="memberHome-navbar">
                <div className="logo">Meals on Wheels</div>
                {/* <div className="nav-memberHome">
                    <h4> Profile</h4>
                </div> */}
                <div className="nav-memberHome">
                  <a className="nav-button" href='/memberProfilePage'> Profile</a>
                </div>
            </nav>

        <div class="card" style={{width: '95%'}}>
              <img src={store} class="card-img-top" alt="..." style={{height: imageheight, width:'100%'}}/>
            <div class="card-body">
              <p class="card-text" style={{fontSize:fontsize}}>	
            The	service	will	be	available	Monday	 through	Friday.	Frozen	meals	will	be	provided	 to	members	who	are	not	
            within	 a	 10-kilometer	 radius	 of	 their	 outsourced	 kitchens	 and	 support	 over	 the	 weekend.	 MerryMeal has	
            partnered	with	several	food	service	providers	across	the	country	to	provide	the	quickest	delivery	possible.</p>
            </div>
          </div>

          <div class="first-role">
            
            <div class="card" style={{width: '350px'}}>
              <img src={pOne} class="card-img-top" alt="..." style={{height: pOneImageheight, width:'350px'}}/>
              <div class="pone-card-body">
                <h5 class="card-title">Chicken & Rice Bowl</h5>
                <p class="card-text"> meal prepping with these fresh & filling grilled chicken bowls</p>
                <a href="#" class="btn btn-primary">Order</a>
              </div>
            </div>
            
            <div class="card" style={{width: '350px'}}>
              <img src={pTwo} class="card-img-top" alt="..." style={{height: pOneImageheight, width:'350px'}}/>
              <div class="pone-card-body">
                <h5 class="card-title">Chicken Soup</h5>
                <p class="card-text"> meal prepping with these fresh & filling grilled chicken bowls</p>
                <a href="#" class="btn btn-primary">Order</a>
              </div>
            </div>

            <div class="card" style={{width: '350px'}}>
              <img src={pThree} class="card-img-top" alt="..." style={{height: pOneImageheight, width:'350px'}}/>
              <div class="pone-card-body">
                <h5 class="card-title">Beans and Beef</h5>
                <p class="card-text"> meal prepping with these fresh & filling grilled chicken bowls</p>
                <a href="#" class="btn btn-primary">Order</a>
              </div>
            </div>

          </div>

          <div class="second-role">

            <div class="card" style={{width: '350px'}}>
              <img src={pFour} class="card-img-top" alt="..." style={{height: pOneImageheight, width:'350px'}}/>
              <div class="pone-card-body">
                <h5 class="card-title">Potato Mix</h5>
                <p class="card-text"> meal prepping with these fresh & filling grilled chicken bowls</p>
                <a href="#" class="btn btn-primary">Order</a>
              </div>
            </div>
            
            <div class="card" style={{width: '350px'}}>
              <img src={pFive} class="card-img-top" alt="..." style={{height: pOneImageheight, width:'350px'}}/>
              <div class="pone-card-body">
                <h5 class="card-title">Fish & Rice</h5>
                <p class="card-text"> meal prepping with these fresh & filling grilled chicken bowls</p>
                <a href="#" class="btn btn-primary">Order</a>
              </div>
            </div>

            <div class="card" style={{width: '350px'}}>
              <img src={pSix} class="card-img-top" alt="..." style={{height: pOneImageheight, width:'350px'}}/>
              <div class="pone-card-body">
                <h5 class="card-title">Fried Noodle</h5>
                <p class="card-text"> meal prepping with these fresh & filling grilled chicken bowls</p>
                <a href="#" class="btn btn-primary">Order</a>
              </div>
            </div>

          </div>

    </div>
  )
}

export default memberHome
