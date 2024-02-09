import {axiosSpaceService} from "./axiosSpaceService";
import {urls} from "../constants/urls";

const spaceServise = {
    getAll:() => axiosSpaceService.get(urls.launches)
}

export {
    spaceServise
}