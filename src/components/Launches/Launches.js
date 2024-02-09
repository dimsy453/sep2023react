import {useEffect, useState} from "react";
import {spaceServise} from "../../services/spaceServise";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        spaceServise.getAll().then(({data}) => {
            const dataFilter = data.filter(item = item.launch_year!==`2020`)
         setLaunches(datdataFiltera) } )
    }, []);

    return (
        <div>
            {launches.map ( launch => <Launch key={launch.launch_date_unix} launches={launches} /> ) }
        </div>
    );
};

export {Launches}