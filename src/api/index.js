import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401

const onAuthorized = () => {
    router.push('/login')
}

const request = (method, url, data) => {
    return axios({
        method: method,
        url: DOMAIN+url,
        data
    }).then((res) => res.data)
      .catch((err) => {
          const { status } = err.response
          if(status === UNAUTHORIZED) return onAuthorized()
          throw Error(err)
      })
}

export const setAuthInHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
    fetch(id){
        return id ? request('get', `/boards/${id}`) : request('get', '/boards')
    },
    create(title){
        return request('post', '/boards', {title})
    }
}

export const auth = {
    login(email, password){
        return request('post', '/login', {email, password})
    }
}

export const card = {
    created(title, listId, pos){
        return request('post', '/cards', {title, listId, pos})
    },
    fetch(id){
        return request('get', `/cards/${id}`)
    },
    update(id, payload){
        return request('put', `/cards/${id}`, payload) 
    }
}