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
        fetch(`http://localhost:5000/laptop/detail/${params.id}`)      
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
        path: "phone",
        element: <Phone/>
      
      },
      {
        path:'*',
        element:<Error/>
      }
      
      

    ],
  },
  
]);
export default Router;
