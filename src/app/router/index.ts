import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.page";
import About from "../pages/About.page";
import Product from "../pages/Product.page";
import Discount from "../pages/discount.page";
import Contact from "../pages/contacts.page";



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
    path: "/products",
    Component: Product,
  },
  {
    path: "/discount",
    Component: Discount,
  },
  {
    path: "/contacts",
    Component: Contact,
  },
]);





