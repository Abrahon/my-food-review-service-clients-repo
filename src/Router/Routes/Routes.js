import Main from "../../Layout/Main";
import Error from "../../Pages/Error/Error";
// import Error from "../../Pages/Error/Error";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Edit from "../../Pages/MyReviews/Edit";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import Footer from "../../Pages/Shared/Footer/Footer";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
// import {PrivateRoute } from '../../Router/Routes';
// import Error from "../../Pages/Error/Error"

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://y-ochre-five.vercel.app/services-limit')
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
               element :<PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://y-ochre-five.vercel.app/services/${params.id}`)

            },
            {
                path:'/serviceDetails',
                element:<ServicesDetails></ServicesDetails>

            },
          
            {
                path:'/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
               
            },
            {
                path:'/edit/:id',
                element:<Edit></Edit>,
                loader:({params})=>fetch(`https://y-ochre-five.vercel.app/review${params.id}`)
                
            },
          
            {
                path:'*',
                element:<Error></Error>
            }
            

           
        ]
        
    }

]);

export default router;