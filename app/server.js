const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const tracingMiddleware = require('./middleware/tracingMiddleware');
const proxyMiddleware = require('./routes/proxy');
const config = require('../config');

const app = new Koa();
const router = new Router();

app.use(tracingMiddleware());

// https://github.com/koajs/bodyparser
app.use(bodyParser());
app.use(logger());
app.use(router.routes());
require('./routes')(router);
proxyMiddleware(app)(config.proxyTable);

const port = Number(process.env.PORT) || 8080;

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
});
