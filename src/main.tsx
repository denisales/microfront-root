import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "app1/app";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App1 />,
//   },
//   {
//     path: "/detail",
//     element: <Detail />,
//   },
// ]);

console.log(App1);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <App1/> */}
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"Loading"}>
              <App />
            </Suspense>
          }
        />
        <Route
          path="/app1/*"
          element={
            <Suspense fallback={"Loading"}>
              <App1 />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
