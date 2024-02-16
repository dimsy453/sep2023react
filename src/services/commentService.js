import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const commentService = {
    getAll:() => apiService.get(urls.comments),
}

export {
    commentService
}