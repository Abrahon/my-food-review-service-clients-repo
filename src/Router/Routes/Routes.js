import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import Footer from "../../Pages/Shared/Footer/Footer";
import SignUp from "../../Pages/SignUp/SignUp";
import ViewImg from "../../Pages/ViewImg/ViewImg";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/footer',
                element:<Footer></Footer>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/serviceDetails/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

            },

           
        ]
        
    }

]);

export default router;