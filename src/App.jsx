import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Contact from "./components/pages/Contact";
import SignIn from "./components/pages/auth/SignIn";
import ProtectRoute from "./components/pages/auth/ProtectRoute";
import LayoutPage from "./components/pages/LayoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route element={<ProtectRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice" element={<LayoutPage />} />
        </Route>

        {/* auth pages */}
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<div>Page was not found 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
