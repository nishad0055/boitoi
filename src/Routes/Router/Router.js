import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Dashboard/AllUser/AllUsers";
import Dashboard from "../../Dashboard/Dashboard";
import MyOrder from "../../Dashboard/MyOrder/MyOrder";
import Sellers from "../../Dashboard/Sellers/Sellers";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryProduct from "../../Pages/CategoryProduct/CategoryProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children:[
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            } ,
            
            {
                path: '/cat/:id', element: <PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute> ,
               loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/blog', element: <Blog></Blog>
            }
        ]             
    },
    {
        path:'/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,children: [
            {
                path: '/dashboard/myorder', element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/allusers', element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/sellers', element: <AdminRoutes><Sellers></Sellers></AdminRoutes>
            },
            {
                path: 'dashboard/add-product', element: <AddProduct></AddProduct>
            },
        ]
    }
])
  