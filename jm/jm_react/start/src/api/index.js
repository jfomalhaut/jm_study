import Axios from 'axios';

export const API = 'http://localhost/api';

const getRequest = async (url) =>{
    return await Axios.get(`${API}/${url}`);
};
const postRequest = async (url, payload) => {
    return await Axios.post(`${API}/${url}`, payload);
};

export const Login = (payload) =>{
    const path = 'login';
    return postRequest(path, payload);
}