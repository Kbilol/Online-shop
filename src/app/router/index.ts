import { createBrowserRouter } from "react-router-dom";
import Home from "@app/pages/Home.page";
import About from "@app/pages/About.page";


import Product from "@app/pages/Product.page";
import Contact from "@app/pages/Contact.page";


import Discount from "@app/pages/Discount.page";
import { Layout } from "@common/components/widgets/Layout";




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





