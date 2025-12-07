import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TicketPage = () => {
  const tickets = [
    {
      id: 1,
      number: "TKT-5XTCTBE",
      date: "21-11-2025, 12:39 AM",
      issue: "Billing issue",
      status: "Open",
    },
    {
      id: 2,
      number: "TKT-5XTCTBE",
      date: "21-11-2025, 12:39 AM",
      issue: "Billing issue",
      status: "Resolve",
    },
    {
      id: 3,
      number: "TKT-5XTCTBE",
      date: "21-11-2025, 12:39 AM",
      issue: "Billing issue",
      status: "In Progress",
    },
    {
      id: 4,
      number: "TKT-5XTCTBE",
      date: "21-11-2025, 12:39 AM",
      issue: "Billing issue",
      status: "Open",
    },
    {
      id: 5,
      number: "TKT-5XTCTBE",
      date: "21-11-2025, 12:39 AM",
      issue: "Billing issue",
      status: "Open",
    },
    {
      id: 6,
      number: "TKT-5XTCTBE",
      date: "21-11-2025, 12:39 AM",
      issue: "Billing issue",
      status: "Open",
    },
  ];

  const statusClass = (status) => {
    switch (status) {
      case "Open":
        return "status-open";
      case "Resolve":
        return "status-resolve";
      case "In Progress":
        return "status-progress";
      default:
        return "";
    }
  };

  return (
    <div className="ticket-container container p-4 my-4 rounded shadow-sm">
      {/* Title and Search */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="my-ticket">MY TICKET</h4>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search Ticket"
        />

        {/* Filter Buttons */}
        <div className="mb-3 d-flex ">
          <button className="btn btn-success btn-sm px-3 all-ticket-btn">
            All Ticket
          </button>
          <button className="btn btn-outline-secondary btn-sm px-3 ticket-btn">
            Open Ticket
          </button>
          <button className="btn btn-outline-secondary btn-sm px-3 ticket-btn">
            In Progress
          </button>
          <button className="btn btn-outline-secondary btn-sm px-3 ticket-btn-last">
            Resolve
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        {/* <table className="table table-hover custom-table">
          <thead>
            <tr className="table-header">
              <th>SL</th>
              <th>Ticket No</th>
              <th>Created at</th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t, index) => (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.number}</td>
                <td>{t.date}</td>
                <td>{t.issue}</td>
                <td>
                  <span
                    className={`badge rounded-pill ${statusClass(t.status)}`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <table className="table table-hover custom-table ">
          <thead>
            <tr className="table-header">
              <th>SL</th>
              <th>Ticket No</th>
              <th>Created at</th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t, index) => (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.number}</td>
                <td>{t.date}</td>
                <td>{t.issue}</td>
                <td>
                  <span className={`badge  ${statusClass(t.status)}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketPage;
