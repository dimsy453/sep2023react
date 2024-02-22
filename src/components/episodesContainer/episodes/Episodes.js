import {useEffect, useState} from "react";

import {episodeService} from "../../../services";
import {Episode} from "../episode/Episode";
import css from './Episodes.module.css'
import {usePageQuery} from "../../../hooks";

const Episodes = () => {

    const [episodesRes, setEpisodesRes] = useState({prev: null, next:null, results:[]});
    const {page, prevPage, nextPage} = usePageQuery();

    useEffect(() => {
        episodeService.getAll(page).then(({data})=>setEpisodesRes(()=>{
            const {info:{next,prev}, results} = data;
            return{
                next,
                prev,
                results
            }
        }))
    }, [page]);

    return (
        <div >
            <div className={css.Episodes}>
                {episodesRes.results.map(episode=><Episode key={episode} episode={episode}/>)}
            </div>
            <div className={css.button}>
                <button disabled={!episodesRes.prev} onClick={prevPage}>Prev</button>
                <button disabled={!episodesRes.next} onClick={nextPage}>Next</button>
            </div>

        </div>
    );
};

export {Episodes}