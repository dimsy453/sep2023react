import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const commentsServices = {
    getAll:() => apiService.get(urls.comments),
    create:(data) => apiService.post(urls.comments, data)

}

export {
    commentsServices
}