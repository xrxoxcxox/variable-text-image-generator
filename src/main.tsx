import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Render from "./pages/Render";
import Root from "./pages/Root";
import packageJson from "../package.json"

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
  ],
  { basename: `/${packageJson.name}` }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
