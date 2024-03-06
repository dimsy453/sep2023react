import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services";
import {carActions} from "../store";
import {Car} from "./Car";


const Cars = () => {

    const {cars, trigger} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    useEffect(() => {
        carService.getAll().then(({data})=> dispatch(carActions.setAllCars(data)))
    },[dispatch, trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars}