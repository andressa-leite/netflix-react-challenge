import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //it listens to any auth change, even if your logged in and you refresh it will store into your local memory
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged IN
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
        //Logged OUT
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {/* if there's no user, go ahead and render the login Screen, otherwise render the rest of the app*/}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Link to="/">
            <HomeScreen />
          </Link>
        )}
        <Link to="/localhost:3000/profile">
          <ProfileScreen />
        </Link>
      </Router>
    </div>
  );
}

export default App;
