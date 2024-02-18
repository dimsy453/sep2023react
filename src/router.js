import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";
import {UsersPage} from "./pages/UsersPage";
import {UsersDetailsPage} from "./pages/UsersDetailsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {PostsPage} from "./pages/PostsPage";
import {PostsDetailsPage} from "./pages/PostsDetailsPage";



const router  = createBrowserRouter ([
    {
        path:``, element: <MainLayouts/>, errorElement:<ErrorPage/>, children:[
            {
                index: true, element: <Navigate to={`users`}/>
            },
            {
                path:`users`, element:<UsersPage/>
            },
            {
                path:`users/:id`, element:<UsersDetailsPage/>, children:[
                    {
                        path:`posts`, element:<PostsPage/>,
                    }
                ]
            },
            {
                path:`posts/:id`, element:<PostsDetailsPage/>, children:[
                    // {
                    //     path:`comments`, element:<PostDetails/>
                    // }
                ]
            }

        ]
    }
])

export {
    router
}