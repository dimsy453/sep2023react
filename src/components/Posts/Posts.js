import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {axiosService} from "../../services/axiosService";
import {urls} from "../../constants/urls";
import {postsService} from "../../services/postsService";
import {PostDetails} from "../PostDetails/PostDetails";
import style from "./Posts.module.css"

const Posts = () => {
    const [ posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getDetailsPost = (post) => {
        setPostDetails(post)

    }

    return (
        <div className={style.Style}>
            <div className={style.Posts}>
                {posts.map(post => <Post key={post.id} post={post} getDetailsPost = {getDetailsPost}/>)}
            </div>
            <hr/>

            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts}