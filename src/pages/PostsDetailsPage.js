import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../services/PostService";
import {PostDetails} from "../components/PostsContainer/PostDetails";


const PostsDetailsPage = () => {

    const [postDetails, setPostDetails] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        postService.getById(id).then(({data}) => setPostDetails(data))
    }, [id]);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {PostsDetailsPage}