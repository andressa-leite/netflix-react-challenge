import React from 'react';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './LoginScreen';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const user = null;

  return (
    <div className="App">
      {/* if there's no user, go ahead and render the login Screen, otherwise render the rest of the app*/}  
      <Router>
        {!user ? (<LoginScreen />) : (
          <Link to="/">
            <HomeScreen />
          </Link> 
         )}
      </Router>
          
    </div>
  );
}

export default App;
