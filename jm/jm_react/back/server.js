const express = require('express');
const cors = require('cors')
const path = require('path')
const api = require('./api')
const app = express();
const PORT = process.env.PORT || 80;

//POST의 body를 사용하기 위해서는 아래와 같이 작성해 준다.
app.use(express.json());
app.use(cors({
    credentials: true,
    method: ['GET', 'POST'],
    origin: [
        'http://localhost',
        'http://localhost:3000'
    ]
}));

app.use('/api', api)
app.use('/', express.static(path.join(path.resolve(),'./dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(path.resolve(), 'dist', 'index.html'));
});
app.listen(PORT, ()=>{
    console.log('Start Express Server. Port Number:'+PORT);
})