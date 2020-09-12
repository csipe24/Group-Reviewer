import axios from 'axios'

export default {

  register (userData) {
    return axios.post('/authapi/register', userData)
  },

  login (userData) {
    return axios.post('/authapi/login', userData)
  },

  authenticated () {
    return axios.post('/authapi/authenticated')
  },

  newPost (postData) {
    return axios.post('/postapi/newPost', postData)
  },

  getPosts () {
    return axios.get('/postapi/getPosts')
  },

  removePost (id) {
    return axios.delete('/postapi/getPosts/' + id)
  },

  updatePost (id, data) {
    return axios.put('/postapi/getPosts/' + id, data)
  },

  getPost (id) {
    return axios.get('/postapi/posts/' + id)
  },

  newGroup (groupData) {
    return axios.post('/groupapi/newGroup', groupData)
  },

  getGroups () {
    return axios.get('/groupapi/getGroups')
  },

  removeGroup(id) {
    return axios.delete('/groupapi/group/'+ id ) 
  },

  groupPost (id) {
    return axios.get("/groupapi/group/" + id)
  },

  updateLikes (id, data) {
    return axios.put('/postapi/likes/' + id, data)
  },

  updateLikesMinus (id, data) {
    return axios.put('/postapi/likesminus/' + id, data)
  },

  updateDislikes (id, data) {
    return axios.put('/postapi/dislikes/' + id, data)
  },

  updateDislikesMinus (id, data) {
    return axios.put('/postapi/dislikesminus/' + id, data)
  },

  newUser (id, userData) {
    return axios.post('/groupapi/addUser/'+ id , userData)
  },
}
