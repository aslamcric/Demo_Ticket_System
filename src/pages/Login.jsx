import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo.png";
import bgRight from "../assets/images/Animation1.png";
import bgLeft from "../assets/images/Animation2.png";

export default function Login() {
  return (
    <div className="login-wrapper position-relative">
      {/* Background decorations */}
      <img src={bgLeft} alt="" className="bg-pattern-left" />
      <img src={bgRight} alt="" className="bg-pattern-right" />

      {/* Center everything vertically & horizontally */}
      <div className="container login-form">
        <div className="row w-100 login-row align-items-center justify-content-center ">
          {/* LEFT TEXT */}
          <div className="col-md-5 text-center text-md-start">
            <img
              src={logo}
              alt="Logo"
              className="mb-4"
              style={{ width: "198px", height: "95px" }}
            />

            <h3 className="Welcome-EDC">Welcome to EDC Support</h3>

            {/* <p className="text-muted mt-3 fs-6 pe-md-5"> */}
            <p className="Welcome-EDC-para">
              We're here for you. Submit your request & our support team will
              get back to you as soon as possible.
            </p>
          </div>

          {/* RIGHT LOGIN BOX */}
          <div className="col-md-5">
            <div className="login-box bg-white shadow-sm rounded-4 ">
              <div className="loginFullBox">
                <h4 className="text-center fw-semibold mb-4 Edc-helpdesk">
                  Sign in to EDC Helpdesk
                </h4>

                <form>
                  <div className="mb-3 phone-number">
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Phone Number *"
                    />
                  </div>

                  <button className="btn Verify w-100 py-2">
                    Send Verification Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
