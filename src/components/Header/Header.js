import css from './Header.module.css'
import {useAppContext} from "../../hoc";

const Header = () => {
    const [name,] = useAppContext()
    return (
        <div className={css.Header}>
            {
                name ? <h1>{name}</h1> :

                    <h1> RICK & MORTY</h1>
            }

        </div>
    );
};

export {Header}