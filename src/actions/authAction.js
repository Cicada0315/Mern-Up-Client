import * as api from '../api/index.js';

export const signup = (inputs, history) => async (dispatch) => {
    try {
        const res = await api.signUp(inputs);
        const data=res.data;
        dispatch({ type: 'AUTH', data });
        history.push('/');
    } catch (error) {
        alert(error.response.data.message);
    }
};

export const signin = (inputs, history) => async (dispatch) => {
    try {
        const res = await api.signIn(inputs);
        const data=res.data;
        dispatch({ type: 'AUTH', data });
        history.push('/');
    } catch (error) {
        alert(error.response.data.message);
    }
};