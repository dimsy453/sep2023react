import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const userServices ={
    getAll:()=>apiService.get(urls.users),
    create:(data)=>apiService.post(urls.users, data)
}

export {
    userServices
}