import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {postService} from "../../services/postsService";
import {Post} from "./Post";





const Posts = () => {

    const {state: {postId}} = useLocation();
    const [post, setPost] = useState()

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
        }, [postId]);


    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts}