import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const albumsService = {
    getAll:() => apiService.get(urls.albums)
}

export {
    albumsService
}