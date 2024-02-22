import {apiServices} from "./apiServices";
import {urls} from "../constants";

const characterService = {
    getById:(ids)=> apiServices.get(urls.character.byId(ids))
}

export {
    characterService
}