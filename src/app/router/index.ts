import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.page";
import About from "../pages/About.page";

import Discount from "../pages/discount.page";
import Product from "../pages/Product.page";
import Contact from "../pages/Contact.page";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/product",
    Component: Product,
  },
  {
    path: "/discount",
    Component: Discount,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);





