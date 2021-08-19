const koa = require('koa');
const serve = require('koa-static');
 
const app = new koa();
app.use(serve(__dirname + '/public'));
 
const port = 8080;
const server = app.listen(port);
console.log('server start port:' + port);
