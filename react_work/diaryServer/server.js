const express = require('express');
const cors = require('cors');
const api = require('./api');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
    credentials: true,
    methods: ['POST', 'GET'],
    origin: [
        '*'
    ],
}));

app.use(express.urlencoded({extended: false}))
app.use('/api', api)


app.listen(PORT, ()=>{
    console.log('Start Diary Server, Port Number:' + PORT);
});