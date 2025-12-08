// Home.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="support-wrapper">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card support-card text-center border-0 support-card-content">
            <h2 className="mb-3 fw-bold">Support Center</h2>

            <p className="text-muted">
              Submit your questions and concerns. Our dedicated support team is
              here to help you every step of the way.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
              <button className="btn btn-success px-4">Create a Ticket</button>
              <button className="btn btn-outline-success px-4">
                Check Ticket Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
