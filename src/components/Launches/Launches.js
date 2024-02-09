import {useEffect, useState} from "react";
import {spaceServise} from "../../services/spaceServise";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        spaceServise.getAll().then(({data}) => {
            const dataFilter = data.filter(item => item.launch_year!==`2020`)
         setLaunches(dataFilter) } )
    }, []);

    return (
        <div>
            {launches.map ( launch => <Launch key={launch.launch_date_unix} launch={launch} /> ) }
        </div>
    );
};

export {Launches}