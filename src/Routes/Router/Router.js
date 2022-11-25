import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import Main from "../../Layouts/Main";
import CategoryProduct from "../../Pages/CategoryProduct/CategoryProduct";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children:[
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
                path: '/add-product', element: <AddProduct></AddProduct>
            },
            {
                path: '/cat/:id', element: <CategoryProduct></CategoryProduct>,
               loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
            
            
    }
])
  