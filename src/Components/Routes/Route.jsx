import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/LOGIN/Login";
import Signup from "../Pages/Login/Signup/signup";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      
      },
      {
        path: "/login",
        element: <Login/>
      
      },
      {
        path: "/signup",
        element: <Signup/>
      
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
        path: "monitor/Asus",
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
      {
        path: "*",
        element: <Error/>,
      },

    ],
  },
  
]);
export default Router;
