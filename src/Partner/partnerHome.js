import React from 'react'
import './partnerHome.css'
import partnerImage from '../Images/p24.png'
import menuImageOne from '../Images/p16.png'

const imageheight = '400px'
function partnerHome() {
  return (
    <div>
       <nav className="partnerHome-navbar">
            <div className="logo">Meals on Wheels</div>
            <div className="nav-partnerHome">
              <a className="nav-button" href='/partnerProfilePage'> Profile</a>
            </div>
        </nav>
        <div class="card" style={{width: '95%'}}>
              <img src={partnerImage} class="card-img-top" alt="..." style={{height: imageheight, width:'100%'}}/>
        </div>

        <div className="menu-container">
          <table className='menu-table'>
            <thead>
              <tr className='menu-first-role'>
                <th>Menu No</th>
                <th>Menu Image</th>
                <th>Menu </th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className='menu-second-role'>
            <tr>
              <td>No.1</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.2</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.3</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.4</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.5</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.6</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.7</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.8</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
             <tr>
              <td>No.9</td>
              <td><img src={menuImageOne} alt='' style={{height:'80px', width: '100px'}}/></td>
              <td>Chicken Bowl</td>
              <td>0</td>
             </tr>
                        

            </tbody>
            </table>
        </div>


    </div>
  )
}

export default partnerHome
