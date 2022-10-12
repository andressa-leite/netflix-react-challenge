import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './LoginScreen';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from './firebase';


function App() {
  const user = null;

//it listens to any auth change, even if your logged in and you refresh it will store into your local memory
  useEffect((
    auth.onAuthStateChanged
  ) =>{}, [])

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
