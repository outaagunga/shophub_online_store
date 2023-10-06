import React, { useState } from "react";
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useMyContextHook } from "../MyContext/MyContext";
import { toast } from "react-toastify";

const Header = () => {
  const {
    loginStatus,
    updateLoginStatus,
    darkMode,
    updateTheme,
    closeTheCart,
    search_term,
    updateSearchTerm,
    products,
    setProducts,
    fetchProducts,
    cartCounter,
    setcartCounter,
  } = useMyContextHook();
  const { pathname } = useLocation();
  // const loginStatus=JSON.parse(localStorage.getItem("loginStatus"))

  const navigate = useNavigate();
  const redirectToLogin = (e) => {
    e.preventDefault();
    navigate("/login");

    // alert("Hi there")
  };

  const redirectToSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
    // alert("Hi there")
  };

  const logOutUser = () => {
    updateLoginStatus(false);
    toast.warning("Logged out!");
    // localStorage.setItem("loginStatus",JSON.stringify(false))
  };
  const redirectToHome = () => {
    navigate("/");
  };

  const changeTheme = () => {
    updateTheme(!darkMode);
  };
  const handleSearch = (e) => {
    // alert("hi there")

    updateSearchTerm(e.target.value);

    if (search_term.trim() === "") {
      fetchProducts();
    } else {
      const newArray = [...products];
      const afterSearchArray = newArray.filter((eachServData) => {
        return eachServData.product_name
          .toLowerCase()
          .includes(search_term.toLowerCase());
      });
      setProducts(afterSearchArray);
    }
  };
  const handleBackSpace = (e) => {
    if (e.key === "Backspace") {
      fetchProducts();
    }
  };
  const dealWithSearchInput = (e) => {
    e.preventDefault();
    // console.log(products)
    const newArray = [...products];
    const afterSearchArray = newArray.filter((eachServData) => {
      return eachServData.product_name
        .toLowerCase()
        .includes(search_term.toLowerCase());
    });
    setProducts(afterSearchArray);
  };
  return (
    <>
      <div
        className={`header-container  ${
          darkMode ? "activate-dark-header" : ""
        }`}
        id={pathname === "/" ? "header-id" : ""}
      >
        <div
          onClick={changeTheme}
          className={`light-dark-mode  ${darkMode ? "icon-dark" : ""}`}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </div>

        <div className="search-section">
          <form className="search-bar-form" onSubmit={dealWithSearchInput}>
            <input
              onKeyDown={handleBackSpace}
              onChange={handleSearch}
              type="text"
              id="search-bar"
              value={search_term}
              placeholder="Search ..."
            ></input>
            {/* <div className="search-btn-div"> */}
            <button type="submit" className="search-btn">
              Search
            </button>

            <div
              className={`search-icon  ${darkMode ? "search-icon-dark" : " "}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </form>
        </div>
        {/* end of search-section */}

        <div className="right-section">
          <div onClick={closeTheCart} className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="cart-counter">{cartCounter}</span>
          </div>

          <div
            id={`${loginStatus ? "change-login-btn" : "home-login-btn"}`}
            className={
              pathname === "/login" || pathname === "/signup" ? `hide-home` : ""
            }
          >
            <button onClick={loginStatus ? logOutUser : redirectToLogin}>
              {loginStatus ? "LogOut" : "Login"}
            </button>
            <div className="lock-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
          </div>
          {/* mcdbkb jjj;lk;ldkckjerjjkekjbekbkdbfk */}
          <div className={loginStatus ? "hide-sign-up-btn" : "sign-up-btn"}>
            <button
              onClick={redirectToSignUp}
              className={
                pathname === "/login" || pathname === "/signup"
                  ? "hide-home"
                  : ""
              }
            >
              Sign Up
            </button>
            <button
              className={`${
                pathname === "/login" || pathname === "/signup"
                  ? ""
                  : "hide-home"
              } `}
              id={darkMode ? "button-shadow" : ""}
              onClick={redirectToHome}
            >
              Go back home
            </button>
            <div className="in-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* end of right section */}
      </div>
      {/* // end of header */}
      {/* <Outlet /> */}
    </>
  );
};

export default Header;
