import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "nousu",
    age: 30,
    email: "nousu@gmail.com",
  });

  const [count, setCount] = useState(0);

  // auth pages
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });


  function signIn() {
    setIsLoading(true);

    setTimeout(() => {
      setIsAuthenticated(true);
      setShowLoginMessage(true);
      localStorage.setItem("isAuthenticated", "true");
      setIsLoading(false);
    }, 3000);
  }

  function signOut() {
    setIsLoading(false);
    setIsAuthenticated(false);
    setShowLoginMessage(false);
    localStorage.setItem("isAuthenticated", "false");
  }

  function hideLoginMessage() {
    setShowLoginMessage(false);
  }

  // adding
  const add = function () {
    setCount(count + 1);
  };

  const remove = () => {
    setCount(count - 1);
  };

  const clear = function () {
    setCount(0);
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        add,
        count,
        clear,
        remove,
        isLoading,
        signIn,
        signOut,
        isAuthenticated,
        showLoginMessage,
        hideLoginMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useContextProvider must be used within UserContextProvider",
    );
  }

  return context;
};
