import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getAll:()=> axiosService(urls.posts.base),
    getById:(id) => axiosService(urls.posts.byId(id))
}

export {
    postsService
}