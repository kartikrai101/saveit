import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Homepage from './homepage';
import PopPage from './Pages/PopPage';
//import {Route} from 'react-router-dom';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/genre/pop" element={<PopPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;

