import React from "react";
import "./App.css";
import MyContext from "../components/MyContext/MyContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Home } from "../components/Home/Home";
import Login from "../components/Login/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";


function App() {
  
  return (
    <MyContext>
      <ToastContainer
        position="top-center"
        theme="colored"
        hideProgressBar
        autoClose="800"
      ></ToastContainer>

      <div className="App"></div>
{/* Hi there */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>      
      </Routes>
    </MyContext>
  );
}

export default App;
