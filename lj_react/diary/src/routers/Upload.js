import React, { useRef, useState } from 'react';
import Axios from 'axios';

const info = {
	writer: 1,
	title: '안녕하세요!',
	content: '내요입니다',
	category_id: 3
};

const Upload = () => {
	const fileRef = useRef();
	const [payload, setPayload] = useState(null);
	const [view, setView] = useState('');

	const onChangeFile = (ev) => {
		const { target: { files } } = ev;

		let reader = new FileReader();
		reader.onloaded = () => {
			const base64 = reader.result;
			if (base64) {
				setView(base64.toString())
			}
		}

		setPayload(files);
	};

	const upload = async () => {
		try {
			const formData = new FormData();
			for (let i in payload) {
				formData.append('file', payload[i]);
			}

			for (let key in info) {
				formData.append(key, info[key]);
			}

			const { data } = await Axios.post('http://localhost/api/upload', formData, { withCredentials: true });
			// const { data } = await Axios.get('http://localhost/api/test', { withCredentials: true });
			console.log(data);

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={{ margin: '100px'}}>
			<h1>Upload Manager</h1>
			{/* {view.map(item => (
				<img src={item} />
			))} */}
			<input type="file" ref={fileRef} multiple onChange={onChangeFile} accept="*" />
			<button onClick={upload}>업로드</button>
		</div>
	);
};

export default Upload;