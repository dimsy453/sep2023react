import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {characterService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../store";
import {Character} from "./Character";
// import {usePageQuery} from "../hooks";


const Characters = () => {
    const [query] = useSearchParams({page:'1'})
    const page = query.getAll('page')
    const dispatch = useDispatch()
     const {characters} = useSelector(state => state.characters)
    // const {page} = usePageQuery();

    useEffect(() => {
        characterService.getAll(page).then(({data})=>dispatch(charactersActions.setResponse(data)))
        console.log(characters)
    },[page]);
    return (

        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters}