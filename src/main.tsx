import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./pages/contact.tsx";
import Services from "./pages/services.tsx";
import Tos from "./pages/tos.tsx";
import Quote from "./pages/quote.tsx";
import LandingPageLayout from "./layouts/LandingPageLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/terms-of-service",
        element: <Tos />,
      },
      {
        path: "/get-quote",
        element: <Quote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
