import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TicketPage from "../pages/TicketPage";
<<<<<<< HEAD
=======
import OpenTicket from "../pages/OpenTicket";
>>>>>>> 0f6d46c530abc9c03a5f15d3181030acc0a6ba73

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      //   {
      //     path: "/",
      //     element: <Home></Home>,
      //   },
      {
        path: "/ticketPage",
        element: <TicketPage></TicketPage>,
      },

<<<<<<< HEAD
      // {
      //     path: 'login',
      //     element: <SignIn></SignIn>
      // },
=======
      {
          path: '/openTicket',
          element: <OpenTicket/>
      },
>>>>>>> 0f6d46c530abc9c03a5f15d3181030acc0a6ba73
    ],
  },
]);
