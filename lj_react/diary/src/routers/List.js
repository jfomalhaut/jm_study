import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetDiaryPost, GetCategory } from '../api';
import moment from 'moment';

const List = () => {
	const [posts, setPosts] = useState([]);
	const [selected, setSelected] = useState(0);
	const [category, setCategory] = useState([]);

	const getCategory = async () => {
		try {
			const { data } = await GetCategory();
			setCategory([
				{ category_id: 0, category_name: '전체', count: 10 },
				...data
			]);
		} catch (error) {
			console.log(error);
		}
	};

	const getPost = async () => {
		try {
			const payload = {
				category_id: selected
			};
			const { data } = await GetDiaryPost(payload);
			setPosts(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPost();
	}, [selected]);

	// 1. 카테고리를 클릭한다. onClick 이벤트.
	// 2. 해당 카테고리의 리스트가 뜬다.  GetDiaryPost 호출 (payload: { category_id } )

	useEffect(() => {
		getCategory();
	}, []);

	return (
		<Container>
			<div>
				<h1>List Component</h1>
				<main>
					<nav>
						{category.map(item => (
							<span 
								key={`CATEGORES${item.category_id}`}
								className={selected === item.category_id ? 'active' : ''} 
								onClick={() => setSelected(item.category_id)}
							>
								{item.category_name}
								<b>({item.count})</b>
							</span>
						))}
					</nav>
					<ul>
						<li>
							<span>번호</span>
							<span>제목</span>
							<span>글쓴이</span>
							<span>날짜</span>
							<span>조회수</span>
						</li>
						{posts.map((item, idx) => (
							<li key={`POSTS${item.diary_id}`}>
								<span>{idx + 1}</span>
								<span>{item.title}</span>
								<span>{item.writer}</span>
								<span>{moment(item.create_datetime).format('YYYY-MM-DD')}</span>
								<span>{item.view}</span>
							</li>
						))}
					</ul>
				</main>
			</div>
		</Container>
	);
};

export default List;

const Container = styled.div`
	div {
		width: 1000px;
		margin: 0 auto;
		main {
			nav {
				display: flex;
				border: 1px solid #bbb;
				span {
					cursor: pointer;
					flex-grow: 1;
					line-height: 40px;
					text-align: center;
					&:not(:last-child) {
						border-right: 1px solid #bbb;
					}
					&.active {
						background: dodgerblue;
						color: #fff;
					}
				}
			}

			ul {
				width: 800px;
				margin: 50px auto;
				border: 1px solid #ddd;
				padding: 0;
				li {
					list-style: none;
					display: flex;
					line-height: 30px;
					padding: 5px 0;

					span {
						flex-shrink: 0;
						&:nth-of-type(1) { text-align: center; width: 50px; }
						&:nth-of-type(2) { flex-grow: 1; }
						&:nth-of-type(3) { text-align: center; width: 150px; }
						&:nth-of-type(4) { text-align: center; width: 120px; }
						&:nth-of-type(5) { text-align: center; width: 50px; }
					}

					&:first-child {
						background: dodgerblue;
						span {
							color: #fff;
							text-align: center;
							font-weight: 600;
						}
					}
					${'' /* &:not(:first-child) {
						border-bottom: 1px solid #ddd;
					} */}
					&:not(:last-child) {
						border-bottom: 1px solid #ddd;
					}
				}
			}
		}
	}
`;