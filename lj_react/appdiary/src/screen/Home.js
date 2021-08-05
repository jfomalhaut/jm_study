import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GetData, PostDiary } from '../api';

const field = {
	category_id: 3,
	title: '' ,
	content: '' ,
	writer: '' ,
};

const Home = () => {
	const [info, setInfo] = useState(field);
	const { title, content, writer } = info;

	const getData = async () => {
		const result = await GetData();
		console.log(result);
	};

	const write = async () => {
		try {
			const result = await PostDiary(info);
			console.log(result);
		} catch (error) {
			console.log(error);
			Alert.alert('Error');
		}
	};

	const onChangeHandler = (ev, name) => {
		const { nativeEvent: { text } } = ev;
		setInfo({
			...info,
			[name]: text
		});
	};

	useEffect(() => {
		// console.log(info);
	}, [info]);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={getData}>
				<Text style={styles.button}>Click!</Text>
			</TouchableOpacity>
			<View style={styles.row}>
				<Text style={styles.label}>작성자</Text>
				<TextInput onChange={(ev) => onChangeHandler(ev, 'writer')} value={writer} style={styles.input} />
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>제목</Text>
				<TextInput onChange={(ev) => onChangeHandler(ev, 'title')} value={title} style={styles.input} />
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>내용</Text>
				<TextInput onChange={(ev) => onChangeHandler(ev, 'content')} value={content} style={styles.input} />
			</View>
			<TouchableOpacity  onPress={write}>
				<Text style={styles.submit} >작성하기</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	submit: {
		width: 100,
		height: 50,
		lineHeight: 50,
		textAlign: 'center',
		fontSize: 22,
		backgroundColor: '#141414',
		color: '#fff',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	button: {
		fontSize: 30,
	},
	row: {
		paddingHorizontal: 20,
		width: '100%',
	},
	label: {
		marginVertical: 10,
	},
	input: {
		backgroundColor: '#f0f0f0',
		height: 50,
		fontSize: 20,
		borderColor: '#bbb',
		color: '#000',
		borderStyle: 'solid',
		width: '100%',
		textAlign: 'center',
	}
})