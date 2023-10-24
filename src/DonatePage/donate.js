import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';
import './donste.css'
import donatepagePhoto from '../Images/p25.png'

function donate() {
  return (
    <div>
        <nav className="member-navbar">
            <div className="logo">Meals on Wheels</div>
            {/* <div className="nav-member">
                <h4> Member Sign Up</h4>
            </div> */}
        </nav>

        <div class="card" style={{width: '95%'}}>
              <img src={donatepagePhoto} class="card-img-top" alt="..." style={{height: '300px', width:'100%'}}/>
            <div class="card-body">
              <p class="card-text" style={{fontSize:'20px'}}>	
              "Welcome to our Donation Page, a cornerstone of the 'Meals On Wheels' initiative, where your compassion can truly shine. At MerryMeal, we are committed to delivering hot, nourishing meals to those who rely on our support. Your contributions are the lifeline of our mission, and here, you have the option to make a significant impact. Consider a daily contribution of just "  5 $  " to provide a meal each day for one, or opt for a monthly commitment of "
              100 $ " to ensure sustained support throughout the month. With your generosity, we can work together to combat hunger and improve the lives of those we serve."
              </p>
            </div>
          </div>
          

          <div class="container-text-center">
              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col">
                  <div class="p-3">$ 5</div>
                </div>
                <div class="col">
                  <div class="p-3">$ 50 </div>
                </div>
                <div class="col">
                  <div class="p-3">$ 100</div>
                </div>
              </div>

              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col">
                  <div class="p-3">$ 5</div>
                </div>
                <div class="col">
                  <div class="p-3">$ 50 </div>
                </div>
                <div class="col">
                  <div class="p-3">$ 100</div>
                </div>
              </div>

            {/* Stipe checkout */}
            {/* <StripeCheckout
                token={this.onToken}
                stripeKey="my_PUBLISHABLE_stripekey"
              />
               */}
              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="btn-col">
                  <button className='p-3'>Donate</button>
                </div>
               
              </div>

            </div>

            
{/* 
          <div class="donate-card"  >
            <div class="D-place" style={{width: '12rem',border: '1px solid red',height:'40px', textAlign:'center' ,paddingTop:'7px' }}><label>item</label></div>
            <div class="D-place" style={{width: '12rem',border: '1px solid red',height:'40px', textAlign:'center' ,paddingTop:'7px' }}><label>item</label></div>
            <div style={{width: '18rem',border: '1px solid red' }}><label>item</label></div>
            <div style={{width: '18rem',border: '1px solid red' }}><label>item</label></div>
            <div style={{width: '18rem',border: '1px solid red' }}><label>item</label></div>
          </div> */}


    </div>
  )
}

export default donate
