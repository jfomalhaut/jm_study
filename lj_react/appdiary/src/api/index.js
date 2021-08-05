const API = 'http://localhost/api';

const opt = (flag = false) => ({
	mode: 'cors',
	cache: 'no-cache',
	headers: {
		'Accept': 'application/json',
		'Content-Type': flag ? 'multipart/form-data' : 'application/json'
	}
});

const getOpt = () => ({ method: 'GET', ...opt() });
const postOpt = (body) => ({ method: 'POST', ...opt(), body: JSON.stringify(body) });
const postUploadOpt = (body) => ({ method: 'POST', ...opt(true), body: body });

const request = async (url, options) => {
	console.log(options);
	return await fetch(`${API}/${url}`, options).then(res => res.json());
};

export const GetData = () => {
	const path = 'getCategory';
	return request(path, getOpt());
};

export const PostDiary = async (payload) => {
	const path = 'postDiary';
	return request(path, postOpt(payload));
}