import {useEffect, useState} from "react";
import {commentsServices} from "../../services/commentsServices";
import {CommentsForm} from "./CommentsForm";
import {Comments} from "./Comments";


const CommentsContainer = () => {
    const [ comments, setComments] = useState([])

    useEffect(() => {
        commentsServices.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <div>
                < CommentsForm setComments={setComments}/>
                <hr/>
                < Comments comments={comments}/>
            </div>
        </div>
    );
};

export {CommentsContainer}