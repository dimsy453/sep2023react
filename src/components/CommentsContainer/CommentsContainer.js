import {useEffect, useState} from "react";
import {commentsServices} from "../../services/commentsServices";


const commentsContainer = () => {
    const [ comments, setComments] = useState([])

    useEffect(() => {
        commentsServices.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <div>
                {/*<UserForm setUsers={setUsers}/>*/}
                {/*<hr/>*/}
                {/*<Users users={users}/>*/}
            </div>
        </div>
    );
};

export {commentsContainer}