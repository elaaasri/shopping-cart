import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes.jsx";
import "./style.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

/**
 * 1- three pages (home, shop and card) ==> DONE !
 * 2- pages should be shown all the time so the user can navigate between them ==> DONE!
 * 3- home page :
 *  ==> should be styled with anything!
 * 4- shop page :
 *  ==> fetch api and show the products
 *  ==> each product should should have :
 *                ==> input field (how many items they want!)
 *                ==> + and - buttons
 *                ==> title and add to cart button!
 * 5- cart page in the navbar should indicate how many items after adding removing them (real time update!)
 * 6- the cart page should display :
 *        ==> items and their quantities
 *        ==> allows user to increase/decrease quantity
 *        ==> allows removing!
 * 7- Clear out any missing in props validation errors in your app!
 * 8- make sure to test the app using React Testing Library, dont use (react-router-dom!),
 * 9- style the app!
 */
