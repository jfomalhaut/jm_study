
import Axios from 'axios';
const API = 'http://localhost/api';
let path = '';

const getRequest = async (_path) => {
	return await Axios.get(`${API}/${_path}`);
};

const postRequest = async (_path, payload) => {
	return await Axios.post(`${API}/${_path}`, payload, { withCredentials: true });
};

// 다이어리 리스트 불러오기
export const GetDiaryList = () => {
	path = 'getDiaryList';
	return getRequest(path);
};

export const GetCategory = () => {
	path = 'getCategory';
	return getRequest(path);
};

// 다이어리 작성하기
export const PostDiary = (payload) => {
	path = 'postDiary';
	return postRequest(path, payload);
};

// 다이어리 불러오기
export const GetDiaryPost = (payload) => {
	path = 'getDiaryPost';
	return postRequest(path, payload);
};

// 다이어리 상세 내용
export const GetPostDetail = (diary_id) => {
	path = 'getPostDetail/' + diary_id;
	return getRequest(path);
};

// 코맨트 불러오기
export const GetComment = (diary_id) => {
	path = 'getComment/' + diary_id;
	return getRequest(path);
};

// 코맨트 작성하기
export const PostComment = (payload) => {
	path = 'postComment';
	return postRequest(path, payload);
};

// 코맨트 불러오기
export const GetFiles = (diary_id) => {
	path = 'getFiles/' + diary_id;
	return getRequest(path);
};