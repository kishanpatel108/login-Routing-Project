import React from "react";
import { NavLink } from "react-router-dom";
//import { useState } from "react";

const Navbar = (props)=> {
const {isLogged , setIsLogged} = props
console.log("propsNavbar",props);
  const logout = () =>{
    setIsLogged(false)
    localStorage.setItem("islogin" , false)
  };


  
  return (
    <div >
      <ul>
        
        {
          !isLogged ?
          (        
          <li>
            <NavLink to="/">login</NavLink>
          </li>
          ):
          (        
            <li>
            <NavLink to="/" onClick={logout}>Logout</NavLink>
          </li>
          ) 
        }

        

        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
