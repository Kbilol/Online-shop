import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.page";
import About from "../pages/About.page";


import Product from "../pages/Product.page";
import Contact from "../pages/Contact.page";
import Discount from "../pages/Discount.page";
import { Layout } from "../../common/ui/widgets/Layout";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
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
    ]
  },
  
]);





