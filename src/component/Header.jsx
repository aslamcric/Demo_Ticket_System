import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3 container">
      {/* LEFT — Logo */}
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="logo" height="40" />
      </NavLink>

      {/* MOBILE TOGGLER */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* MAIN MENU */}
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarMenu"
      >
        <ul className="navbar-nav gap-4 px-4 py-2 custom-menu">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-menu" : "")
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/openTicket"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-menu" : "")
              }
            >
              Open a Ticket
            </NavLink>
          </li>

          <li className="nav-item position-relative">
            <NavLink
              to="/ticketPage"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-menu" : "")
              }
            >
              My Ticket
            </NavLink>
          </li>
        </ul>
      </div>

      {/* RIGHT — Logout */}
      <div className="d-none d-lg-block">
        <button className="btn px-3 logout-btn">👤 Logout</button>
      </div>
    </nav>
  );
};

export default Header;
