import axios from "axios";
import {spaceBaseURL} from "../constants/urls";




const axiosSpaceService = axios.create({baseURL: spaceBaseURL})


export {
    axiosSpaceService
}