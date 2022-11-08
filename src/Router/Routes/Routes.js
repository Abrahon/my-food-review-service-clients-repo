import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Footer from "../../Pages/Shared/Footer/Footer";

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
            }
        ]
        
    }

]);

export default router;