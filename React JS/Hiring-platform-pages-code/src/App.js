import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'
import LoginPage from './LoginPage';
import ReceivedOfferPage from './candidatePages/ReceivedOfferPage';
import AcceptedOfferPage from './candidatePages/AcceptedOfferPage';
import RejectedOfferPage from './candidatePages/RejectedOfferPage';
import OpenJobsPage from './employeePages/OpenJobsPage';
import EDashobard from './employeePages/EDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
//import firebase from './firebase';

//lowercase are reserved by EJX
const App=()=> { 






    return (
     
<Switch>
<Route exact path="/users/dashboard" component={EDashobard} />
<Route exact path="/users/offers/received" component={ReceivedOfferPage} />
<Route exact path="/users/offers/accepted" component={AcceptedOfferPage} />
<Route exact path="/users/offers/rejected" component={RejectedOfferPage} />
<Route exact path="/users/jobs" component={OpenJobsPage} />
<Route exact path="/" component={LoginPage} />

</Switch>

  

            
    
    );

    //This above code get comiles to  below code
    // return React.createElement('div',null,React.createElement('h1',null,"Siddharth"));
  
}

export default App;
