import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import home from './Home/home';
import roleSelection from './RoleSelection/roleSelection';
import member from './Member/member';
import caregiver from './Caregiver/caregiver.js';
import partner from './Partner/partner';
import volunteer from './volunteer/volunteer';
import signIn from './SignIn/signIn';
import donate from './DonatePage/donate';
// import donate from './DonatePage/donate'
import memberHome from './Member/memberHome'
import caregiverHome from './Caregiver/caregiverHome'
import partnerHome from './Partner/partnerHome'
import volunteerHome from './volunteer/volunteerHome'
import memberProfile from './Member/memberProfile'
import admin from './Admin/admin'
// import donateHome from './DonatePage/donateHome.css'
// import {Route, link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
       <Route path="/memberHomePage" component={memberHome}></Route>
        <Route exact path="/" component={home} ></Route>
        <Route path="/roles" component={roleSelection} ></Route>
        <Route path="/memberrole" component={member}></Route>
        <Route path="/caregiverrole" component={caregiver}></Route>
        <Route path="/partnerrole" component={partner}></Route>
        <Route path="/volunteerrole" component={volunteer}></Route>
        <Route path="/signinPage" component={signIn}></Route>
        <Route path="/donatePage" component={donate}></Route>
        
        <Route path="/careHomePage" component={caregiverHome}></Route>
        <Route path="/partnerHomePage" component={partnerHome}></Route>
        <Route path="/volunteerHomePage" component={volunteerHome}></Route>
        <Route path="/memberProfilePage" component={memberProfile}></Route>
        <Route path="/adminPage" component={admin}></Route>
        {/* <Route path="/donateHomePage" component={donateHome}></Route> */}
        {/* <Route path="/caregiverrole" component={caregiver}></Route> */}


        {/* <Route path="/adminPage" component={roleselection} ></Route>
        <Route path="/memberPage" component={roleselection} ></Route>
        <Route path="/caregiversPage" component={roleselection} ></Route>
        <Route path="/partnerPage" component={roleselection} ></Route>
        <Route path="/volunteerPage" component={roleselection} ></Route> */}

      </Switch>
    </Router>
  )
}

export default App


