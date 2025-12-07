import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TicketPage from "../pages/TicketPage";
import OpenTicket from "../pages/OpenTicket";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
      {
        path: "/ticketPage",
        element: <TicketPage />,
      },

      {
        path: "/openTicket",
        element: <OpenTicket />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
