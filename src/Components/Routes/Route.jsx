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
        element: <div>this is home </div>,
      },
    ],
  },
  {
    path: "*",
    element: <Error/>,
  },
]);
export default Router;
