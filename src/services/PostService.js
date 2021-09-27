import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

})

export default {
    getPosts() {
        return apiClient.get('/posts?_limit=10')
    },
    getPost(id) {
        return apiClient.get('/'+id)
    }
    
}