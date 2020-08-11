const express = require('express');

module.exports = function (server) {
  const router = express.Router();
  server.use('/api', router);

  const memeTrendService = require('../api/meme/memeTrendService');
  memeTrendService.register(router, '/memeTrend');
};
