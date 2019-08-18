module.exports = app => {
  app.get('/health', (ctx, next) => {
    ctx.status = 200;
    ctx.body = 'OK';
    next();
  });
};
