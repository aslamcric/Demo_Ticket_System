import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  // Check if current route is login
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <Header />}

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
