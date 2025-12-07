import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OpenTicket = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.email || !form.name || !form.topic || !form.message) {
      setErrorMsg("Please fill all required fields.");
      return false;
    }

    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) {
      setErrorMsg("Enter a valid email address.");
      return false;
    }

    setErrorMsg("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccessMsg("");

    try {
      await new Promise((res) => setTimeout(res, 800)); // simulate API

      setSuccessMsg("Ticket submitted successfully!");
      setForm({ email: "", name: "", topic: "", message: "" });
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div
    //   className="container p-4 my-4 rounded shadow-sm"
    //   style={{ maxWidth: 700 }}
    // >
    // <div className="container p-4 my-4 rounded shadow-sm submit-ticket-box">
    //   <h4 className="fw-bold text-center mb-3">Submit a New Ticket</h4>

    //   <p className="text-center text-muted">
    //     Fill out the form below and we'll get back to you as soon as possible.
    //   </p>

    //   {successMsg && <div className="alert alert-success">{successMsg}</div>}
    //   {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

    //   <form onSubmit={handleSubmit}>
    //     {/* Email */}
    //     <div className="mb-3">
    //       <input
    //         type="email"
    //         name="email"
    //         className="form-control"
    //         placeholder="Email Address *"
    //         value={form.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     {/* Name */}
    //     <div className="mb-3">
    //       <input
    //         type="text"
    //         name="name"
    //         className="form-control"
    //         placeholder="Full Name *"
    //         value={form.name}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     {/* Topic */}
    //     <div className="mb-3">
    //       <select
    //         name="topic"
    //         className="form-select"
    //         value={form.topic}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="">Select Help Topic *</option>
    //         <option value="account">Account Issue</option>
    //         <option value="payment">Payment Problem</option>
    //         <option value="technical">Technical Support</option>
    //         <option value="other">Other</option>
    //       </select>
    //     </div>

    //     {/* Message */}
    //     <div className="mb-3">
    //       <textarea
    //         name="message"
    //         className="form-control"
    //         rows="5"
    //         placeholder="Write your message here..."
    //         value={form.message}
    //         onChange={handleChange}
    //         required
    //       ></textarea>
    //     </div>

    //     {/* Submit Button */}
    //     <button
    //       type="submit"
    //       className="btn btn-success w-100"
    //       disabled={loading}
    //     >
    //       {loading ? "Submitting..." : "Submit Ticket"}
    //     </button>
    //   </form>
    // </div>

    <div className="container p-4 my-4 rounded shadow-sm submit-ticket-box">
      <div className="submit-form-info container">
        <h4 className="fw-bold text-center mb-3 submit-ticket-heading">Submit a New Ticket</h4>

        <p className="text-center text-muted submit-ticket-para">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {successMsg && <div className="alert alert-success">{successMsg}</div>}
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="full-form">
          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Name */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Topic */}
          <div className="mb-3">
            <select
              name="topic"
              className="form-select"
              value={form.topic}
              onChange={handleChange}
              required
            >
              <option value="">Select Help Topic *</option>
              <option value="account">Account Issue</option>
              <option value="payment">Payment Problem</option>
              <option value="technical">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100 submit-ticket-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Ticket"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpenTicket;
