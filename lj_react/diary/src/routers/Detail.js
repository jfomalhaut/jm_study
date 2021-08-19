import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetComment, GetPostDetail, PostComment } from '../api';

const field = {
	diary_id: 0,
	title: '',
	content: '',
	view: '',
	writer: 0,
	create_datetime: '',
};

const Detail = ({ match: { params: { id } } }) => {
	const [info, setInfo] = useState(field);
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState('');
	const { diary_id, title, content, view, writer, create_datetime } = info;

	const getPostDetail = async () => {
		try {
			const { data } = await GetPostDetail(id);
			console.log(data);
			setInfo(data[0]);
		} catch (error) {
			console.log(error);
		}
	};

	const getComment = async () => {
		try {
			const { data } = await GetComment(id);
			setComments(data);
		} catch (error) {
			console.log(error);
		}
	};

	const submitComment = (ev) => {
		ev.preventDefault();
		write();
	};

	const write = async () => {
		if (comment === '') {
			alert('댓글 내용을 입력해주세요');
			return;
		}
		try {
			const payload = {
				writer: 1,
				content: comment,
				diary_id: id
			};
			const { data } = await PostComment(payload);
			getComment();
			setComment('');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		getPostDetail();
		getComment();
	}, []);

	return (
		<Container>
			<header>
				<h1>{title}</h1>
				<div>
					<h3>작성자: 유저1</h3>
					<span>view: {view}</span>
				</div>
			</header>
			<p>{content}</p>
			<section>
				<form onSubmit={submitComment}>
					<input type="text" value={comment} onChange={(ev) => setComment(ev.target.value)} placeholder="댓글을 남겨주세요" />
					<button>작성</button>
				</form>
				<ul>
					{comments.map(item => (
						<li key={`COMMENT${item.comment_id}`}>
							<label>[사용자] </label>
							<p>{item.content}</p>
						</li>
					))}
				</ul>
			</section>
		</Container>
	);
};

export default Detail;

const Container = styled.div`
	width: 1000px;
	margin: 0 auto;
	header { 
		padding: 20px 20px;
		border-bottom: 1px solid;
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	& > p {
		border-bottom: 2px solid #ddd;
		min-height: 500px;
		whiet-space: pre-line;
		padding: 20px 20px;
	}
`;