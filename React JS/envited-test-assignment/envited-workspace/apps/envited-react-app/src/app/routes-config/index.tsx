

import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage'
import CreateEventPage from '../pages/CreateEventPage/CreateEventPage'
import ViewEventPage from '../pages/ViewEventPage/ViewEventPage';

export const RoutesConfig=()=>{
       return ( <Router>
         <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/event" element={<ViewEventPage />} />
           <Route path="/create" element={<CreateEventPage />} />
           <Route path="*" element={<h1>Page Not Found</h1>}/>
         </Routes>
         </Router>);
}