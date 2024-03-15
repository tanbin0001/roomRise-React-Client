



import {
    createBrowserRouter,

} from "react-router-dom";
 
import Main from "../layouts/Main";
import Home from "../pages/Home";
import RoomDetails from "../components/Home/Rooms/RoomDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

 

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           
            {
                path: '/rooms/:_id',
                element: <RoomDetails></RoomDetails>
            },
           

        ]

    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
]);