import React, { StrictMode } from "react";

import ReactDOM, { render, createRoot } from "react-dom/client";

import { router } from "./router";

import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
