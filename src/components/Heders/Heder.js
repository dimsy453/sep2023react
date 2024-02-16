import {NavLink} from "react-router-dom";

import css from "./Header.module.css"

const Heder = () => {
    return (
        <div className={css.Header}>
            <div>
                <NavLink to={`/albums`}>Albums</NavLink>
                <NavLink to={`/comments`}>Comments</NavLink>
                <NavLink to={`/todos`}>Todos</NavLink>
            </div>
        </div>
    );
};

export {Heder}