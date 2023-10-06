import React, {  useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMyContextHook } from "../MyContext/MyContext";
import Header from "../Header/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const {darkMode, updateLoginStatus}=useMyContextHook()

const loginTheUser=(e)=>{
    e.preventDefault()

    const SIGNUP_DETAILS=JSON.parse(localStorage.getItem("SIGNUP_DETAILS"))

    if(SIGNUP_DETAILS.email===email&&SIGNUP_DETAILS.password===password){
      navigate("/")
      toast.success("Login successful!")
      updateLoginStatus(true)

    }
    else{
      toast.warning("Invalid user credentials")
    }

}
 
  return (
    <>
    
    <div className={`container ${darkMode? "bg-dark-container":" "}`}>
    <Header />
      <form onSubmit={loginTheUser} className={`form ${darkMode? "bg-dark":" "}`}>
        <div className="username-div">
          <label htmlFor="userN" className="labels">
            Email
          </label>
          <input
            className="inputs"
            id="userN"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email"
            required
          ></input>
        </div>

        <div className="password-div">
          <label htmlFor="passW" className="labels">
            Password
          </label>
          <input
            className="inputs"
            id="passW"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            required
          ></input>
        </div>
        

        <div className="login-btn-div">
          <button type="submit" className={`login-btn ${darkMode? "logs-dark":" "}`}>
            Login
          </button>
        </div>
        <NavLink to="/signup" className={`register ${darkMode? "bg-color":" "}`}>
          Don't have an account? SignUp
        </NavLink>
      </form>
    </div>
    </>
  );
};

export default Login;
