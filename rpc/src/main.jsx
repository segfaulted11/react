import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Users from "./Components/Users/Users.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";

const userData = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        element: (
          <Suspense
            fallback={
              <h2 className="text-5xl font-bold">Data is loading.......</h2>
            }
          >
            <Users userData={userData}></Users>
          </Suspense>
        ),
      },
      {
        path: "users/:userId", //dynamic route
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users`),
        Component: UserDetails,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);