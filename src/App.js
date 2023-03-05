import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Homepage from './homepage';
//import {Route} from 'react-router-dom';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default App;

