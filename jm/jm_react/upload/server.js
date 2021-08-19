const express = require('express');
const cors = require('cors');
const path = require('path')
const api = require('./api')
const app = express();

const PORT = process.env.PORT || 80;

app.use(cors({
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: [
        'http://localhost:3000',
        'http://localhost',
    ],
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', api)

app.use('/files', express.static(path.join(__dirname, './files')));

app.listen(PORT, ()=>{
    console.log('Start upload server')
})