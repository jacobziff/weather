import './index.css';
import './tailwind.css';
import { useState } from "react";
import { useEffect } from "react";
import Home from './Views/Home';
import Forecast from './Views/Forecast';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/weather/" element={<Home/>}></Route>
          <Route path="/weather/:city" element={<Forecast/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
