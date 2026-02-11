import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./app/routes.jsx";
import "./styles.css";

const router = createBrowserRouter(routes);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/*
 * 1- three pages (home, shop and card) ==> DONE !
 * 2- pages should be shown all the time so the user can navigate between them ==> DONE!
 * 3- home page :
 *  ==> should be styled with anything!
 * 4- shop page :
 *  ==> fetch api and show the products   ==> DONE !
 *  ==> adding fetching loading, error ...==> DONE !
 *  ==> each product should should have :
 *                ==> input field (how many items they want!) ==> DONE
 *                ==> + and - buttons ==> DONE
 *                ==> title and add to cart button! ==> DONE
 * 5- cart page in the navbar should indicate how many items after adding removing them (real time update!)
 * 6- the cart page should display :
 *        ==> items and their quantities ==> done
 *        ==> allows user to increase/decrease quantity ==> done
 *        ==> allows removing! => done
 * 7- Clear out any missing in props validation errors in your app! => done
 * 10- default for all wrong urls ==> DONE!
 * 9- style the app! ==> DONE!
 *  - fix images path in assets! ==> DONE!
//  - make sure to test the app using React Testing Library, dont use (react-router-dom!).
 *
 */

// test the app :
// using react testing library.
// Be careful not to test react-router-dom directly,

// in cart page allow users to increase/decrease the quantity of items in their cart.
