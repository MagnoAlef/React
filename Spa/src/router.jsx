import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout";
import AdminHome from "./pages/admin/AdminHome";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />
    }, {
      path: "products",
      element: <Products />
    }, {
      path: "cart",
      element: <Cart />
    }]
  },
  {
    path: "/admin",
    element: <AdminHome />
  }
])

export default router;