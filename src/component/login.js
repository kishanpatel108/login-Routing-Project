import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { CompareData } from "../action/action";
import "./login.css";
//import {ComLogData} from "../action/action";



const Login= (props) => {
  console.log("props",props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //console.log("getData1",getData1);
  const navigate = useNavigate()
  
  const getData1 = useSelector((state)=>state.ReLogReducer && state.ReLogReducer.list)
  console.log("getData1",getData1);

  const sub_ligin=(e) => {
    e.preventDefault();
    const fetch_data= getData1.find((elem)=>elem.Email === email && elem.Password === password)
    
    if(fetch_data)
    {
    props.setIsLogged(true)
    localStorage.setItem("islogin", true)
    navigate("/home")
    }
    else{
      alert("Please Enter Valid Email and Password")
    }
    setEmail("")
    setPassword("")
    console.log("fetch_data",fetch_data);
  };

// const dispatch = useDispatch()
// const sub_ligin = (e) =>{
  //     e.preventDefault()
  //     dispatch(CompareData({email, password, navigate}))
  //     setEmail("")
//     setPassword("")
// }

  return (
    <div className="regBackImage">
      <div className="reg_form">
        <br /><br /><br /><br /><br />
        <h1 className="loginHeading">Login</h1>
        <br /><br />

        <label>
          <h2>Email</h2>
        </label>
        <br />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <label>
          <h2>Password</h2>
        </label>
        <br />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter Your Password"
        />
        <br />
        <br />
        <button className="btn btn-dark" onClick={(e)=>sub_ligin(e)} type="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
