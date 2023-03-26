import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "example1",
          element: <Example1 />,
        },
        {
          path: "example2",
          element: <Example2 />,
        },
      ],
    },
  ],
  { basename: "/background-image-generator" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
