import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Render from "./pages/Render";
import Root from "./pages/Root";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: ":template",
          element: <Render />,
        },
      ],
    },
    {
      path: "*",
      element: <Root />,
    },
  ],
  { basename: "/dynamic-text-image-generator" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
