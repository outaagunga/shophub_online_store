import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useMyContextHook = () => useContext(ThemeContext);

const MyContext = ({ children }) => {
  const [loginStatus, setloginStatus] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [search_term, setSearch_term] = useState("");
  const [products, setProducts2] = useState([]);
  const [cartCounter, setcartCounter2] = useState(0);
  useEffect(() => {
    fetchProducts();
  }, []);

  const updateLoginStatus = (newState) => {
    setloginStatus(newState);
  };
  const updateTheme = (newState) => {
    setDarkMode(newState);
  };
  const updatePopUpState = (newState) => {
    setPopUp(newState);
  };
  const closeTheCart = () => {
    updatePopUpState(!popUp);
  };
  const updateSearchTerm = (newState) => {
    setSearch_term(newState);
  };
  const setProducts = (newState) => {
    setProducts2(newState);
  };
  const setcartCounter = (newState) => {
    setcartCounter2(newState);
  };

  const fetchProducts = () => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts2(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <ThemeContext.Provider
      value={{
        loginStatus,
        updateLoginStatus,
        darkMode,
        updateTheme,
        popUp,
        updatePopUpState,
        closeTheCart,
        search_term,
        updateSearchTerm,
        products,
        setProducts,
        fetchProducts,
        cartCounter,
        setcartCounter,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default MyContext;
