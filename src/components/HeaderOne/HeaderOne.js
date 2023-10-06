import React, { useEffect, useState } from "react";
import "./HeaderOne.css";
import { useMyContextHook } from "../MyContext/MyContext";

export const HeaderOne = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode } = useMyContextHook();

  // Use useEffect to add an event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`general-container `} id={isScrolled ? "shrink" : ""}>
      <div className={`head-container ${darkMode ? "activate-dark" : ""}`}>
        <p className={`logo  ${darkMode ? "logo-dark" : " "}`}>ShopHub</p>
        <ul className="head-lists">
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="second">
        <div className="welcome-message">
          This is ShopHub Online Store! Welcome to our Online Products Sale!
          Discover a wide range of high-quality products at unbeatable prices.
          Shop now and enjoy a seamless shopping experience delivered to your
          doorstep. Happy shopping!
        </div>
      </div>
    </div>
  );
};
