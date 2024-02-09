import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {axiosPostService} from "../../services/axiosPostService";
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

    return (
        <div className={style.Posts}>
            <div >
                {posts.map(post => <Post key={post.id} post={post} setPostDetails = {setPostDetails}/>)}
            </div>
            <hr/>

            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts}