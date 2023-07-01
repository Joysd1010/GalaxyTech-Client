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
        element: <div class="relative group">
        <button class="text-blue-500 hover:text-blue-600 font-bold py-2 px-4">
          Hover me
        </button>
        <div class="absolute hidden bg-white shadow-lg py-2 rounded">
         
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 1</a>
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 2</a>
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
        </div>
      </div>
      ,
      },
    ],
  },
  {
    path: "*",
    element: <Error/>,
  },
]);
export default Router;
