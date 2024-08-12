import ShinUp from "../componends/ShinUp";
import SingIn from "../componends/SingIn";
import Home from "../componends/Home";
import { Navigate } from "react-router-dom";
import ForgotPassword from "../componends/ForgotPassword";
import ResetPassword from "../componends/ResetPassword";


const AppRouter = [
    {
        path:'/',
        element:<><Home/></>
    },
    {
        path:'/signIn',
        element:<><SingIn/></>
    },
    {
        path:'/signUp',
        element:<><ShinUp/></>
    }, 
    {
        path:'/forgotPassword',
        element:<><ForgotPassword/></>
    }, 
    {
        path:'/resetPassword',
        element:<><ResetPassword/></>
    },
    {
        path:'/*',
        element:<Navigate to='/'/>
    }
]

export default AppRouter