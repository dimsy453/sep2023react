import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharacterPagination = () => {

    const {prevPage, nextPage} = useSelector(state => state.characters)
    const [,setQuery] = useSearchParams({page:'1'})
    const prev =()=> {
        setQuery(value => {
            value.set('page', `${+value.get('page')-1}`)
            return value
        })};

    const next =()=> {
        setQuery(value => {
            value.set('page', `${+value.get('page')+1}`)
            return value
            })}

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>PREV</button>
            <button disabled={!nextPage} onClick={next}>NEXT</button>
        </div>
    );
};

export {CharacterPagination}