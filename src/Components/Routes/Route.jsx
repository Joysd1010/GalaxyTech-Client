import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <p>home</p>
      
      },
      {
        path: "desktop",
        element: <p>my desktop</p>
      
      },
      {
        path: "desktopOffer",
        element: <p>my desktop ofer</p>
      
      },
      {
        path: "Brand",
        element: <p>my Brand</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "Mini",
        element: <p>Apple</p>
      
      },
      {
        path: "Apple",
        element: <p>Apple</p>
      
      },
      {
        path: "laptop",
        element: <p>home</p>
      
      },
      {
        path: "intelpc",
        element: <p>home</p>
      
      },
      {
        path: "amdpc",
        element: <p>home</p>
      
      },
      {
        path: "Asus",
        element: <p>home</p>
      
      },
      {
        path: "HP",
        element: <p>home</p>
      
      },
      {
        path: "Dell",
        element: <p>home</p>
      
      },
      {
        path: "MacBook",
        element: <p>home</p>
      
      },
      {
        path: "allLaptop",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },
      {
        path: "AllPC",
        element: <p>home</p>
      
      },

    ],
  },
  {
    path: "*",
    element: <Error/>,
  },
]);
export default Router;
