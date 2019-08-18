module.exports = {
  jaegerConfig: {
    serviceName: `jaeger-nodejs-${process.env.DEPLOY_ENV || ''}`,
    reporter: {
      // collectorEndpoint: 'http://xxx.xxx.xxx'
      agentHost: 'xxx.xxx.xxx',
      agentPort: 6832,
    },
  },
  proxyTable: [
    {
      // target: 'http://localhost:8090',
      target: 'http://xxx.xxx.xxx',
      changeOrigin: true,
    },
  ],
};
