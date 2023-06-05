import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Register from "./component/register";
import Navbar from "./component/Navbar";
import Home from "./component/home";
import  PrivateRoute from "./component/privateRoute";
import { useEffect, useState } from "react";
function App() {

  const [isLogged , setIsLogged] = useState(false)
  const getData2 = JSON.parse(localStorage.getItem("islogin"))
  useEffect(()=>{
    if(getData2)
    {
      setIsLogged(true)
    }
    else{
      setIsLogged(false)
    }
  },[getData2])



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
        <Routes>
          <>
          <Route path="/" element={<Login setIsLogged={setIsLogged}/>}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
