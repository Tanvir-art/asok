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
import KendrioCommittee from "./pages/KendrioCommittee";
import VibagioCommittee from "./pages/VivagioCommittee";
import DistrictCommittee from "./pages/District";
import Governance from "./pages/Governance";
import Documents from "./pages/Documents";


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
        path: "committee/kendrio",
        element: <KendrioCommittee />,
      },
      {
        path: "committee/vivagio",
        element: <VibagioCommittee />,
      },
      {
        path: "committee/district",
        element: <DistrictCommittee />,
      },
      {
        path: 'family',
        element: <Family />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "governance",
        element: <Governance />,
      }
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);