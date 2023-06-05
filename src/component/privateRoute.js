import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"

function PrivateRoute({children}) {
const [isLogged , setIsLogged]= useState(true)
const navigate = useNavigate()

useEffect(()=>{
  // console.log("login",login);
  let login = JSON.parse(localStorage.getItem("islogin"))
  if(login)
  { 
    setIsLogged(true)
  }
  else{
    setIsLogged(false)
  } 
},[])


if(!isLogged)
{
    return navigate("/") 
}
else{
    return  children
}

};

export default PrivateRoute