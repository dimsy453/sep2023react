const baseURL = `https://rickandmortyapi.com/api`

const episodes = '/episode'
const characters = `/character`


const urls = {

    episodes,
    character:{
        base:characters,
        byId:(ids)=>`${characters}/${ids}`
    }
}

export {
    baseURL,
    urls
}