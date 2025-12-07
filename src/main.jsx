import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./root/Route";
// import App from "./App.jsx";
<<<<<<< HEAD
=======
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 0f6d46c530abc9c03a5f15d3181030acc0a6ba73

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
