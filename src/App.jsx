import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from "./pages";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Products from "./pages/Products";

import RootLAyout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLAyout />, 
      errorElement:<ErrorPage/>,
       children:[
        { path: "/", element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/Service", element: <Service /> },
        { path: "/Contact", element: <Contact /> },
        { path: "/Portfolio", element: <Portfolio />},
        { path: "/Products", element: <Products />},
        { path: "/Products/:ProductID", element: <ProductDetailPage />}
      ]
    },

  ]);

  return <RouterProvider router={router} />;
}
