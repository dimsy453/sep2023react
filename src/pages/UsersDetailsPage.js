import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../services/userService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UsersDetailsPage = () => {

    const {id} = useParams()
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        userService.getById(id).then(({data})=> setUserDetails(data ))
    }, [id]);



    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersDetailsPage}