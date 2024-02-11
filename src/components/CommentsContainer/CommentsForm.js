import {useForm} from "react-hook-form";
import {commentsServices} from "../../services/commentsServices";
import {prefs} from "joi";

const CommentsForm = ({setComments}) => {
    const {reset,register, handleSubmit} = useForm()

    const save = (comment) => {
        commentsServices.create(comment).then(({data}) => setComments(prev => [...prev, data]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={`postId`} {...register(`postId`)}/>
                <input type="text" placeholder={`name`} {...register(`name`)}/>
                <input type="text" placeholder={`email`} {...register(`email`)}/>
                <input type="text" placeholder={`body`} {...register(`body`)}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {CommentsForm}