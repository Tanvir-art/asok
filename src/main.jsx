import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
// import MembershipForm from "./Components/MemberForm";
import HomePage from "./pages/Homepage";
import NewsSection from "./pages/NewsSection";
import NewsDetails from "./pages/NewsDetails";
import Committee from "./pages/Committee";
import Family from "./pages/Family";
import Gallery from "./pages/Gallery";
import KendrioCommittee from "./pages/KendrioCommittee";
import VibagioCommittee from "./pages/VivagioCommittee";
import DistrictCommittee from "./pages/District";
import Governance from "./pages/Governance";
import Documents from "./pages/Documents";
import UpozilaCommittee from "./pages/UpozilaCommittee";
import AdminLogin from "./pages/AdminLogin";
import AddCommittee from "./pages/AddCommittee";
import AddNews from "./pages/AddNews";
import AddFamily from "./pages/AddFamily";
import EditCommittee from "./pages/EditCommittee";
import EditNews from "./pages/EditNews";
import EditFamily from "./pages/EditFamily";
import ProtectedRoute from "./Components/ProtectedRoute";
// import AsokVortiForm from "./Components/MemberForm";
import AsokMemberForm from "./Components/AsokMemberForm";


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
        path: "news/:id",
        element: <NewsDetails />,
      },
      {
        path: "membership",
        // element: <MembershipForm />,
        element: <AsokMemberForm />,
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
        path: "committee/upozila",
        element: <UpozilaCommittee />,
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
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/add-committee",
    element: <ProtectedRoute><AddCommittee /></ProtectedRoute>,
  },
  {
    path: "/admin/add-news",
    element: <ProtectedRoute><AddNews /></ProtectedRoute>,
  },
  {
    path: "/admin/add-family",
    element: <ProtectedRoute><AddFamily /></ProtectedRoute>,
  },
  {
    path: "/admin/edit-committee/:id",
    element: <ProtectedRoute><EditCommittee /></ProtectedRoute>,
  },
  {
    path: "/admin/edit-news/:id",
    element: <ProtectedRoute><EditNews /></ProtectedRoute>,
  },
  {
    path: "/admin/edit-family/:id",
    element: <ProtectedRoute><EditFamily /></ProtectedRoute>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);