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

// fix stock done
// fix checkProductStock and show msg done
// quntity button wont include decimals done
// product reviews component done
// product page key done
// go to cart button done
// fix footer table css! done
// add cart page and its module css done
// add default for 0 products done
// add payment section page and its module css done
// add search file and css module done
// fix comments review width to be fixed! done
// fix style.css file done
// add width to header on scrolling! done
// fix css containers names! done
// clean products outlet and getCategoryByName from CategoryPage and add discount to the product done
// fix first page in routes! done

// default page :
// wrong path done
// error
// loading

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
 * 8- make sure to test the app using React Testing Library, dont use (react-router-dom!),
 * 9- style the app!
 * 10- default for all wrong urls
 */

// product page :
//   ==> pop up window for added to card : done
//   ==> fix header products count : done
//   ==> show // tags / warranty reviews */ minimumOrderQuantity, */ stock */7
// fix first page landing !
// search bar module css
// cart css
// about css
// default path page
// loading css
// error css
// fix react console errors
// testing
