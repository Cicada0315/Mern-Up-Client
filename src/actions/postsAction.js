import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const res = await api.fetchPosts();
        console.log(res);
        if (res.data.message){
            alert(res.data.message);
        }else{
            dispatch({ type: 'FETCH_POSTS', payload: res.data });
        }
    } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const res = await api.createPost(post);
  
        dispatch({ type: 'CREATE_POST', payload: res.data });
    } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const res = await api.updatePost(id, post);
    
        dispatch({ type: 'UPDATE_POST', payload: res.data });
    } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
    }
};

export const updateView = (id, post) => async (dispatch) => {
    try {
        const res = await api.updateView(id, post);
        dispatch({ type: 'UPDATE_POST', payload: res.data });
    } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE_POST', payload: id });
    } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const res = await api.likePost(id);
        dispatch({ type: 'LIKE_POST', payload: res.data });
    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
    }
};

export const getSearchedPosts= (query) => async (dispatch) => {
    try {
        console.log(query);
        const res = await api.searchPosts(query);
        dispatch({ type: 'FETCH_POSTS', payload: res.data });
    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
    }
};