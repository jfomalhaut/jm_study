require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

import api from './api'
import jwtMiddleware from './lib/jwtMiddleware';


const { PORT, MONGO_URI } = process.env;

mongoose
  .connect('mongodb://3.35.17.137/diarywithu', { useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
  
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../../blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async ctx=>{
  if(ctx.status === 404 && ctx.path.indexOf('/api') !==0){
    await send(ctx, 'index.html', { root: buildDirectory});
  }
})

const port = PORT || 80;
app.listen(port, () => {
  console.log('Listening to port 80');
});
