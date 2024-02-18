import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const postService = {
    getById:(id)=>apiService.get(urls.posts.byId(id)),
    getByUsersId:(userId)=>apiService.get(urls.posts.base, {params:{userId}})
}

export {
    postService
}