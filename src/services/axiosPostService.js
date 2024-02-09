import axios from "axios";
import {postBaseURL} from "../constants/urls";

const axiosPostService = axios.create({baseURL: postBaseURL})


export {
    axiosPostService
}