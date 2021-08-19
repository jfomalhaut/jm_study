import Axios from 'axios';
const API = 'http://localhost/api';
let path='';

const getRequest = async (_path) => {
    return await Axios.get(`${API}/${_path}`);
};

const postRequest = async (_path, payload) => {
    return await Axios.post(`${API}/${_path}`, payload);
};

export const GetDiaryList = () => {
    const path = 'getDiaryList';
    return getRequest(path);
}

export const GetCategory = () => {
    path = 'getCategory';
    return getRequest(path);
}

export const PostDiary = (payload) => {
    const path='postDiary';
    return postRequest(path, payload);
}

export const GetDiaryPost = (payload) => {
    path = 'getDiaryPost';
    return postRequest(path, payload);
}
