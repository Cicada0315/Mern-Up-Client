import axios from 'axios';

//const API = axios.create({ baseURL: 'https://cicada-up-api.herokuapp.com' });
const API = axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('userinfo')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userinfo')).token}`;
  }
  return req;
});

//post request
export const fetchPosts = () => API.get('/posts');
export const createPost = (post) => API.post('/posts', post);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updateView = (id, updatedView) => API.patch(`/posts/${id}/viewPost`, updatedView);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const searchPosts = (query) => API.get(`/posts?search=${query}`);

//Auth request
export const signIn = (inputs) => API.post('/user/signin', inputs);
export const signUp = (inputs) => API.post('/user/signup', inputs);