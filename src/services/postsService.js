import {axiosPostService} from "./axiosPostService";
import {urls} from "../constants/urls";

const postsService = {
    getAll:()=>axiosPostService.get(urls.posts)
}

export {
    postsService
}