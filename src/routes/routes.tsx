



import {
    createBrowserRouter,

} from "react-router-dom";
 
import Main from "../layouts/Main";
import Home from "../pages/Home";
import RoomDetails from "../components/Home/Rooms/RoomDetails";

 

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

    }
]);