import React, { useContext, useRef, useState } from 'react'
import {  useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import userImg from '../assets/images/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211-removebg-preview.png'
const Login = () => {
  // const user = {
  //   userName: "g",
  //   password: "g1",
  // };
  const [left,setLeft]=useState(false)
  const toggleLeft=()=>{
    setLeft(!left)
  }
  const {user, setUser} = useContext(GlobalContext)
  const location = useNavigate();

    //! LOGIN
  const submitForm = (e) => {
    e.preventDefault();
    if (
      user.userName === name.current.value &&
      user.password === pass.current.value &&
      user.userName && user.password !== ''
    ) {
      localStorage.setItem("User", JSON.stringify(user));
      location("/admin");
      window.location.reload();
    } else if(name.current.value== '' || pass.current.value== ''){
        alert('Enter username and password')
    } else {
      alert("User not found");
    }
  };

  const name = useRef();
  const pass = useRef();

  //! SIGN UP
  const checkForm=(e)=>{
    e.preventDefault()
    if(firstName&&userPass !==''){
      return(
        setUser({
          userName: firstName.current.value,
          password: userPass.current.value
        })
      )
    }
  }

  const firstName=useRef()
  const userPass = useRef()

  return (
    <>
       <section id='registration' className='themeMode'>
        <div className="register-card">
        <div className={left ? "item-owr1 owr tr-0" : "item-owr1 owr"}>
              <h4>Welcome Back!</h4>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={toggleLeft}>Logİn</button>
            </div>
            <div className={!left ? "item-owr2 owr tr-0" : "item-owr2 owr"}>
              <h4>Hello, Friend!</h4>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={toggleLeft}>Sign Up</button>
            </div>
        <div className={left ? "owerlay" : "owerlay right"}></div>
          <div className="sign-in form">
            <div className={!left ? "item-reg" : "item-reg item-hid2"}>
                <h4>Login</h4>
                <form onSubmit={submitForm}>
                  <input type="text" placeholder='User Name' ref={name} />
                  <input type="password" placeholder='Password' ref={pass} />
                  <p>Forgot password?</p>
                  <button>LOGİN</button>
                </form>
            </div>
          </div>
          <div className="log-in form">
            <div className={left ? "item-reg" : "item-reg item-hid1"}>
          <h4>Create <br /> Account</h4>
              <form onSubmit={checkForm}>
              <input type="text" placeholder='Name' ref={firstName} />
              <input type="text" placeholder='Email' />
              <input type="password" placeholder='Password' ref={userPass} />
              <button>SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
