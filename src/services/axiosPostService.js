import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosPostService = axios.create({ baseURL })

export {
    axiosPostService
}