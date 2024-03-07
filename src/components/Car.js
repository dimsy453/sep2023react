import {carActions} from "../store";
import {useDispatch} from "react-redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
console.log(car)
    const dispatch = useDispatch();

    return (
        <div>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>UPDATE</button>
            <button onClick={() => dispatch(carActions.deleteById({id}))}>DELETE</button>
        </div>
    );
};

export {Car}