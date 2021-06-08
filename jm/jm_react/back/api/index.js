const express = require('express');
const router = express.Router();

const USERNAME = 'jinyinshu'
const PASSWORD = 'K1923512im';

const middleware = (req, res, next) => {
    const { query: {name}} =req;
    if(name === 'test123'){
        res.status(200).send('okokokoko')
    }else{
        next();
    }
}

router.post('/login', (req,res)=>{
    const {body:{username, password}} = req;
    if(USERNAME === username && PASSWORD ===password){
        res.status(200).send(true);
    }else{
        React.status(200).send(false)
    }
});

router.get('/getName',middleware, (req,res)=>{
    const { query : {name}}=req;
    res.send(`<h1>Bye, ${name}</h1>`)
})

module.exports = router;

