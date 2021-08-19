import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { GetCategory, PostDiary } from '../api';

const field = {
	title: '',
	content: '',
	writer: 1,
	category_id: 0,
};

// image/gif, image/png, image/jpeg, image/bmp, image/webp

const Write = () => {
	const [cate, setCate] = useState([]);
	const [info, setInfo] = useState(field);
	const { title, content, writer, category_id } = info;
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

	const onChangeValue = (ev) => {
		const { target: { name, value } } = ev;
		setInfo({
			...info,
			[name]: name === 'category_id' ? value * 1 : value
		});
	};

	const write = async (ev) => {
		ev.preventDefault();
		try {
			const formData = new FormData();
			for (let i in payload) {
				formData.append('file', payload[i]);
			}

			for (let key in info) {
				formData.append(key, info[key]);
			}
			const { data } = await PostDiary(formData);
			alert('작성완료');
			setInfo(field);
		} catch (error) {
			console.log(error);
			alert('네트워크 오류 발생');
		}
	};

	const getCategory = async () => {
		try {
			const { data } = await GetCategory();
			setCate(data);
		} catch (error) {
			console.log(error);
			alert('네트워크 오류');
		}
	};
	useEffect(() => {
		console.log(info);
	}, [info]);

	useEffect(() => {
		getCategory();
	}, []);

	return (
		<Container>
			<main>
				<h1>Write Component</h1>
				<form onSubmit={write}>
					<div>
						<label>분류</label>
						<select name="category_id" value={category_id} onChange={onChangeValue}>
							<option value="0">선택하세요</option>
							{cate.map(item => (
								<option key={`CATEGORY${item.category_id}`} value={item.category_id}>{item.category_name}</option>
							))}
						</select>
					</div>
					<div>
						<label>제목</label>
						<input type="text" name="title" value={title} onChange={onChangeValue} />
					</div>
					<div>
						<label>내용</label>
						<textarea type="text" name="content" value={content} onChange={onChangeValue} />
					</div>
					<div>
						<label>첨부파일</label>
						<input type="file" ref={fileRef} multiple onChange={onChangeFile} accept="*" />
					</div>
					<button>작성</button>
				</form>
			</main>
		</Container>
	)
}

export default Write;


const Container = styled.section`
	background: #f0f0f0;
	min-height: 100vh;
	main {
		width: 1000px;
		margin: 50px auto;
		background: #fff;
		padding: 20px;
		form {
			div {
				display: flex;
				padding: 10px 0;
				label {
					width: 150px;
					flex-shrink: 0;
				}

				select {
					padding: 5px;
					outline: none;
				}

				input, textarea {
					flex-grow: 1;
					outline: none;
					padding: 10px;
				}

				textarea {
					resize: none;
					height: 300px;
					overflow-y: scroll;
				}
			}
		}
	}
`;