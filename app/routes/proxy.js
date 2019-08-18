const c2k = require('koa2-connect');
const proxyMiddleware = require('http-proxy-middleware');
const { FORMAT_HTTP_HEADERS } = require('opentracing');
const tracer = require('../tracer');

const onProxyReq = (proxyReq, req) => {
  tracer.inject(req.span, FORMAT_HTTP_HEADERS, req.headers);
  console.info('[SPAN]', req.span);
  console.info('[Header]', req.headers);
};

module.exports = app => (proxyTable = []) => {
  if (Array.isArray(proxyTable)) {
    proxyTable.map(proxy => app.use(c2k(proxyMiddleware({ ...proxy, onProxyReq }))));
  }
};
