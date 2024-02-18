import {useNavigate} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user

    const  navigate= useNavigate()
    return (
        <div>
           <div> id: {id}</div>
            <div> nane: {name}</div>
            <button onClick={()=>navigate(`/users/${id}`)}> user-details </button>
        </div>
    );
};

export {User}