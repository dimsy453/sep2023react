import {carActions} from "../store";
import {carService} from "../services";
import {useDispatch} from "react-redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
console.log(car)
    const dispatch = useDispatch();

    const deleteById = async () => {
        await carService.deleteByd(id)
        dispatch(carActions.trigger())
    };

    return (
        <div>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>UPDATE</button>
            <button onClick={deleteById}>DELETE</button>
        </div>
    );
};

export {Car}