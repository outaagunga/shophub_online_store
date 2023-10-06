import React from "react";
import Header from "../Header/Header";
import { HeaderOne } from "../HeaderOne/HeaderOne";
import "./home.css";
import { useMyContextHook } from "../MyContext/MyContext";
import ProductList from "../ProductList";
import Footer from "../HeaderOne/Footer";
export const Home = () => {
  const { popUp, darkMode, closeTheCart } =
    useMyContextHook();

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <HeaderOne />
      <Header />
     
      <ProductList />
      <Footer />
    </div>
  );
};
