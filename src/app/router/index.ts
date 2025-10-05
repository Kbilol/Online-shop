import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/page";







import ProductBuy from "../pages/product/[id]/buy/page";
import ProductDetails from "../pages/product/[id]/details/page";
import About from "../pages/about/page";
import Discount from "../pages/discount/page";
import Contact from "../pages/contact/page";
import { Layout } from "../../common/widgets/Layout";





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
        path: "/discount",
        Component: Discount,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path:"/product/:id/buy",
        Component: ProductBuy,
      },
      {
        path:"/product/:id/details",
        Component: ProductDetails,
      }
    ]
  },
  
]);





