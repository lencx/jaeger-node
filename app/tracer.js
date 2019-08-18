const initTracer = require('jaeger-client').initTracer;
const { jaegerConfig } = require('../config');

module.exports = initTracer({
  serviceName: jaegerConfig.serviceName,
  sampler: {
    type: 'const',
    param: 1,
  },
  reporter: jaegerConfig.reporter,
}, {});
