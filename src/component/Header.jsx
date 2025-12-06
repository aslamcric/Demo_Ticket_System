import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3 container">
      {/* LEFT — Logo */}
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img src={logo} alt="logo" height="40" />
      </a>

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
          {/* <ul class="navbar-nav gap-4 px-4 py-2 custom-navbar"> */}
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/open-ticket">
              Open a Ticket
            </a>
          </li>

          <li className="nav-item position-relative">
            <a className="nav-link active" href="/ticketPage">
              My Ticket
            </a>
            <span className="underline"></span>
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
