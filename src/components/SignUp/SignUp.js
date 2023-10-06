import React, { useState } from "react";
import "./sign-up.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useMyContextHook } from "../MyContext/MyContext";

const SignUp = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { darkMode }=useMyContextHook()

  

  const signUpTheUser = (e) => {
    e.preventDefault();

    const SIGNUP_DETAILS={first_name, last_name, email, password}
    if(confirmIfFilled()) {
    localStorage.setItem("SIGNUP_DETAILS",JSON.stringify(SIGNUP_DETAILS))
    toast.success("Registered successfully!")
      navigate("/login");
    // console.log(JSON.parse(localStorage.getItem("SIGNUP_DETAILS")))
    }
  };
  const confirmIfFilled = () => {
    let filled = true;
    let errorMessage = "Please Input";
    if (first_name === "" || first_name === null) {
      filled = false;
      errorMessage += " first_name";
    }
    if (last_name === "" || last_name === null) {
      filled = false;
      errorMessage += " last_name";
    }
    if (password === "" || password === null) {
      filled = false;
      errorMessage += " password";
    }
    if (email === "" || email === null) {
      filled = false;
      errorMessage += " email";
    }
    if (!filled) {
      toast.warning(errorMessage);
    }
    return filled;
  };


  return (
    <div className={`container reg-container ${darkMode? "bg-dark-container":" "}`}>
      <Header />
      <form id="form" className={`form ${darkMode? "bg-dark":" "}`} onSubmit={signUpTheUser}>
        <div className="username-div">
          <label htmlFor="userN" className="labels">
            First name
          </label>
          <input
            className="inputs"
            id="userN"
            type="text"
            onChange={(e) => setfirst_name(e.target.value)}
            value={first_name}
            placeholder="Enter first name"
          ></input>
        </div>

        <div className="password-div">
          <label htmlFor="passW" className="labels">
            Last Name
          </label>
          <input
            className="inputs"
            id="passW1"
            type="text"
            onChange={(e) => setlast_name(e.target.value)}
            value={last_name}
            placeholder="Enter last name"
          ></input>
        </div>

        <div className="password-div">
          <label htmlFor="passW" className="labels">
            Email
          </label>
          <input
            className="inputs"
            id="passW2"
            type="text"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter email"
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
          ></input>
        </div>
        

        <div className="login-btn-div">
          <button type="submit" className={`login-btn ${darkMode? "logs-dark":" "}`}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;



















