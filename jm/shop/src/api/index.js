
import Axios from 'axios';
const API = 'http://localhost/api';
let path = '';

const getRequest = async (_path) => {
	return await Axios.get(`${API}/${_path}`);
};

const postRequest = async (_path, payload) => {
	return await Axios.post(`${API}/${_path}`, payload, { withCredentials: true });
};

export const PostShop = () => {
	path = 'postShop';
	return postRequest(path);
};

export const GetShop = () => {
	path = 'getShop';
	return getRequest(path);
};
