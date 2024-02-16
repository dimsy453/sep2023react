import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const todosService = {
    getAll:() => apiService.get(urls.todos.base)
}

export {
    todosService
}