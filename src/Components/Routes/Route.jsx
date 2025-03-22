import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/LOGIN/Login";
import Signup from "../Pages/Login/Signup/signup";
import Laptop from "../Pages/Products/Laptop/Laptop"
import DetailPage from "../Pages/Products/Laptop/DetailPage";
import Monitor from "../Pages/Products/Monitor/Monitor";
import Gpu from "../Pages/Products/GPU/Gpu";
import Phone from "../Pages/Products/Phone/Phone";
import Ram from "../Pages/Products/Ram/Ram";
import BuyNow from "../Pages/Products/BuyNowPage/BuyNow";
import PrivateRoute from "../Pages/PrivateRoute/Privateroute";
import DetailpageG from "../Pages/Products/GPU/DetailpageG";
import DetailPagePhone from "../Pages/Products/Phone/DetailPagePhone";
import Demo from "../Pages/Products/Demo/Demo";

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
        path: "laptop",
        element: <Laptop/>
      
      },
      { path: "laptopId/:id",
        element: <DetailPage/>,
        loader: ({ params }) =>
        fetch(`https://galaxytechserver.onrender.com/laptop/detail/${params.id}`)      
      },
      
      { path: "gpuID/:id",
        element: <DetailpageG/>,
        loader: ({ params }) =>
        fetch(`https://galaxytechserver.onrender.com/gpu/detail/${params.id}`)      
      },
      { path: "phoneID/:id",
        element: <DetailPagePhone/>,
        loader: ({ params }) =>
        fetch(`https://galaxytechserver.onrender.com/gpu/detail/${params.id}`)      
      },
      {
        path: "monitor",
        element: <Monitor/>
      
      },
      {
        path: "gpu",
        element: <Gpu/>
      
      },
      {
        path: "SSD",
        element: <Demo/>
      
      },
      {
        path: "HDD",
        element: <Demo/>
      
      },
      {
        path: "Casing",
        element: <Demo/>
      
      },
      {
        path: "mother",
        element:<Demo/>
      
      },
      {
        path: "speaker",
        element:<Demo/>
      
      },
      {
        path: "phone",
        element: <Phone/>
      
      },
      {
        path: "CasingCooler",
        element:<Demo/>
      
      },
      {
        path: "ups",
        element: <Demo/>
      
      },
      
      {
        path: "accessories",
        element: <Demo/>
      
      },
      {
        path: "Component",
        element: <Demo/>
      
      },
      
      {
        path: "ram",
        element: <Ram/>
      
      },
      {path: "buynow",
      element:<PrivateRoute><BuyNow/></PrivateRoute> },
      {
        path:'*',
        element:<Error/>
      }
      
      

    ],
  },
  
]);
export default Router;
