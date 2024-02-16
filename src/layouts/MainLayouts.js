import {Heder} from "../components/Heders/Heder";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <Heder/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts}