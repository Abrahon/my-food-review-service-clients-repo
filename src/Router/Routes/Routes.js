import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import Footer from "../../Pages/Shared/Footer/Footer";
import SignUp from "../../Pages/SignUp/SignUp";
// import {PrivateRoute } from '../../Router/Routes';

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
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/serviceDetails/:id',
               element :<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path:'/myReviews',
                element:<MyReviews></MyReviews>
            }
           

           
        ]
        
    }

]);

export default router;