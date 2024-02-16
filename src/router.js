import {createBrowserRouter, Navigate} from "react-router-dom";
import {ErrorPage} from "./pages/ErrorPage";
import {MainLayouts} from "./layouts/MainLayouts";
import {AlbumsPage} from "./pages/AlbumsPage";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";



const router = createBrowserRouter([
    {
        path:``, element:<MainLayouts/>,errorElement:<ErrorPage/>,children:[
            {index:true, element:<Navigate to={`albums`}/>},
            {
                path:`albums`, element:<AlbumsPage/>
            },
            {
                path:`todos`, element:<TodosPage/>
            },
            {
                path:`comments`, element:<CommentsPage/>,children:[
                    {
                        path:`posts`, element:<PostsPage/>
                    }
                ]
            }
        ]
    }

])

export {
    router
}