import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import MembershipForm from "./Components/MemberForm";
import HomePage from "./pages/Homepage";
import NewsSection from "./pages/NewsSection";
import Committee from "./pages/Committee";
import Family from "./pages/Family";
import Gallery from "./pages/Gallery";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,         
        element: <HomePage />,
      },
      {
        path: "news",
        element: <NewsSection />,
      },
      {
        path: "membership",
        element: <MembershipForm />,
      },
      {
        path: "committee",
        element: <Committee />,
      },
      {
        path: 'family',
        element: <Family />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      }
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);