import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Homepage from './homepage';
import PopPage from './Pages/PopPage';
import HipHopPage from './Pages/HipHopPage';
import RockPage from './Pages/RockPage';
import RapPage from './Pages/RapPage';
import SoothingPage from './Pages/SoothingPage';
import IndiePage from './Pages/IndiePage';
//import {Route} from 'react-router-dom';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/genre/pop" element={<PopPage />}></Route>
        <Route path="/genre/hiphop" element={<HipHopPage />}></Route>
        <Route path="/genre/rock" element={<RockPage />}></Route>
        <Route path="/genre/rap" element={<RapPage />}></Route>
        <Route path="/genre/soothing" element={<SoothingPage />}></Route>
        <Route path="/genre/indie" element={<IndiePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;

