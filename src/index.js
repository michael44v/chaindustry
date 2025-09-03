import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom';
import Home from './chain/Home';
import HeadComponent from './chain/HeadComponent';
import Footer from './chain/FooterComponent';
import reportWebVitals from './reportWebVitals';
import Switches from './ClassSwitchDate';
import TodayClasses from './chain/TodayClasses';
import PreClass from './chain/PreClass';
import LiveVideo from './chain/LiveVideo';
import PostClass from './chain/PostVid';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
          <script async src="chrome-extension://idnnbdplmphpflfnlkomgpfbpcgelopg/inpage.js" id="xverse-wallet-pr"/>
          <script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      </head>
       <Router>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/header' element={ <HeadComponent /> }/>
             <Route path='/footer' element={ <Footer /> }/>
             <Route path='/swit' element={ <Switches /> }/>
              <Route path='/today' element={ <TodayClasses /> }/>
               <Route path='/pre' element={ <PreClass /> }/>
               <Route path='/vid' element={ <LiveVideo /> }/>
               <Route path='/post' element={ <PostClass /> }/>
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
