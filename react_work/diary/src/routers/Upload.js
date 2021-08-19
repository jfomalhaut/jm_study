import React, {useRef, useState} from 'react';
import Axios from 'axios';

const info = {
    writer: 1,
    title: '파일업로드',
    content: '제발 성공해라',
    category_id : 3
}

const Upload = () => {
    const fileRef = useRef();
    const [payload, setPayload] = useState(null)

    const onChangeFile = (ev) => {
        const { target: {files }} = ev;
        setPayload(files)
    }

    const upload = async() => {
        try{
            const formData = new FormData();
            for (let i in payload){
                formData.append('file', payload[i]);
            }
            // formData.append('writer', 1);
            // formData.append('title', '오늘도 열공');
            // formData.append('content', '끝이없는 코딩');
            // formData.append('category_id', 3);

            for(let key in info) {
                formData.append(key, info[key]);
            }

            const { data } = Axios.post('http://localhost/api/upload', formData, {withCredentials: true});
            console.log(data)
           
        }catch(error){
            console.log(error)
        }
    }
 
    return(
        <div style={{margin: '100px'}}>
            <h1>Upload Component</h1>
            <input type="file" ref={fileRef} multiple onChange={onChangeFile} accept="*" />
            <button onClick={upload}>업로드</button>
        </div>
    )
}

export default Upload;