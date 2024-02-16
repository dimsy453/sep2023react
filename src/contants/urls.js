const baseURL = `https://jsonplaceholder.typicode.com`

const albums = `/albums`
const todos = `/todos`
const comments = `/comments`
const posts = '/posts'

const urls = {
    albums,
    todos,
    comments,
    posts: { byId: (id) => `${posts}/${id}`
}
}

export {
    baseURL,
    urls
}