import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TicketPage from "../pages/TicketPage";

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
        path: "/",
        element: <TicketPage></TicketPage>,
      },

      // {
      //     path: 'login',
      //     element: <SignIn></SignIn>
      // },
    ],
  },
]);
