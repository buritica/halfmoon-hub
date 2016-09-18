/* jshint unused:vars */
'use strict';
var app = require('express')();
var express = require('express');
var port = process.env.PORT || 3000;
var debug = require('debug')('halfmoon-hub:');

app.use('/', express.static('dist'));

app.use(function notFound(req, res) {
  debug('%s was not found', req.originalUrl);
  res.status(404);
  res.type('txt').send('Not found');
});

app.use(function logErrors(err, req, res, next) {
  console.error('application error', err.stack);
  next(err);
});

app.use(function errorHandler(err, req, res, next) {
  console.error('handling error', err);
  return res
    .status(500)
    .send(err);
});

/**
 * Start server if we're not someone else's dependency
 */
if (!module.parent) {
  app.listen(port, function () {
    debug('Halfmoon Hub listening on http://localhost:%s/', port);
  });
}
