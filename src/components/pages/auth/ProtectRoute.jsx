import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useContextProvider } from "../../context/GlobalContext";

const ProtectRoute = () => {
  const { isAuthenticated } = useContextProvider();

  return isAuthenticated ? <DefaultLayout /> : <Navigate to="/login" replace />;
};

export default ProtectRoute;
