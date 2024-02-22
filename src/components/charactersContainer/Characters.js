import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {Character} from "./Character";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {ids} = useParams();

    useEffect(() => {
        characterService.getById(ids).then(({data}) => setCharacters(data))
    }, [ids]);
    return (
        <div>
            {characters.map(character =><Character key={character.id} character={character}/>)}
        </div>

    );

};

export {Characters}