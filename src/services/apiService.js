import axios from "axios";

import {baseURL} from "../constants/uris";



const apiService = axios.create(baseURL)

export {
    apiService
}