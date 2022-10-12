//import { current } from "@reduxjs/toolkit";
import { React, useRef } from "react";
import { auth } from './firebase';
import "./SignupScreen.css";

function SignupScreen() {
  //i'm gonna have an email reference which uses the useRef hook
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  
  // evrytime a button is inside of a form it will typically refresh and to prevent that, we use "e.preventDefault()""
    const register = (e) => {
      e.preventDefault();
   
    //whenever we click the register button, we wanna create an account with the users email and password
    //we are gonna pull the authentication object from local firebase
    //the one below creates a user
    auth
    .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
    };

     
    //the one below logs the user In
      const signIn = (e) => {
        e.preventDefault();

        auth
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          ).then((authUser) => {
            console.log(authUser)
          }).catch((error) => {
            alert(error.message)
          })
      };
    
  
  return (
      <div className="signupScreen">
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref ={passwordRef} placeholder="Password" type="password" />
          <button type="submit" onClick={signIn}>Sign In</button>
          <h4>
            <span className="signupScreen_grey">New to Nteflix? </span>
            <span className="signupScreen_link" onClick={register}>
              Sign Up now.
            </span>
          </h4>
        </form>
      </div>
    );
  }

  export default SignupScreen;
